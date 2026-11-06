const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    table[index] = value >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let value = 0xffffffff;
  for (const byte of bytes) value = CRC_TABLE[(value ^ byte) & 0xff] ^ (value >>> 8);
  return (value ^ 0xffffffff) >>> 0;
}

function dosStamp(date) {
  const when = date || new Date();
  const time = (when.getHours() << 11) | (when.getMinutes() << 5) | Math.floor(when.getSeconds() / 2);
  const day = ((when.getFullYear() - 1980) << 9) | ((when.getMonth() + 1) << 5) | when.getDate();
  return { time, day };
}

export function zipStore(files) {
  const encoder = new TextEncoder();
  const encoded = files.map((file) => {
    const name = encoder.encode(file.name);
    const data = encoder.encode(file.text);
    return { name, data, crc: crc32(data) };
  });
  let size = 22;
  for (const file of encoded) size += 30 + file.name.length + file.data.length + 46 + file.name.length;
  const out = new Uint8Array(size);
  const view = new DataView(out.buffer);
  const { time, day } = dosStamp(new Date());
  let offset = 0;
  const centrals = [];

  for (const file of encoded) {
    const localAt = offset;
    view.setUint32(offset, 0x04034b50, true);
    offset += 4;
    view.setUint16(offset, 20, true);
    offset += 2;
    view.setUint16(offset, 0x0800, true);
    offset += 2;
    view.setUint16(offset, 0, true);
    offset += 2;
    view.setUint16(offset, time, true);
    offset += 2;
    view.setUint16(offset, day, true);
    offset += 2;
    view.setUint32(offset, file.crc, true);
    offset += 4;
    view.setUint32(offset, file.data.length, true);
    offset += 4;
    view.setUint32(offset, file.data.length, true);
    offset += 4;
    view.setUint16(offset, file.name.length, true);
    offset += 2;
    view.setUint16(offset, 0, true);
    offset += 2;
    out.set(file.name, offset);
    offset += file.name.length;
    out.set(file.data, offset);
    offset += file.data.length;
    centrals.push({ file, localAt });
  }

  const directoryAt = offset;
  for (const { file, localAt } of centrals) {
    view.setUint32(offset, 0x02014b50, true);
    offset += 4;
    view.setUint16(offset, 20, true);
    offset += 2;
    view.setUint16(offset, 20, true);
    offset += 2;
    view.setUint16(offset, 0x0800, true);
    offset += 2;
    view.setUint16(offset, 0, true);
    offset += 2;
    view.setUint16(offset, time, true);
    offset += 2;
    view.setUint16(offset, day, true);
    offset += 2;
    view.setUint32(offset, file.crc, true);
    offset += 4;
    view.setUint32(offset, file.data.length, true);
    offset += 4;
    view.setUint32(offset, file.data.length, true);
    offset += 4;
    view.setUint16(offset, file.name.length, true);
    offset += 2;
    view.setUint16(offset, 0, true);
    offset += 2;
    view.setUint16(offset, 0, true);
    offset += 2;
    view.setUint16(offset, 0, true);
    offset += 2;
    view.setUint16(offset, 0, true);
    offset += 2;
    view.setUint32(offset, 0, true);
    offset += 4;
    view.setUint32(offset, localAt, true);
    offset += 4;
    out.set(file.name, offset);
    offset += file.name.length;
  }

  const directorySize = offset - directoryAt;
  view.setUint32(offset, 0x06054b50, true);
  offset += 4;
  view.setUint16(offset, 0, true);
  offset += 2;
  view.setUint16(offset, 0, true);
  offset += 2;
  view.setUint16(offset, encoded.length, true);
  offset += 2;
  view.setUint16(offset, encoded.length, true);
  offset += 2;
  view.setUint32(offset, directorySize, true);
  offset += 4;
  view.setUint32(offset, directoryAt, true);
  offset += 4;
  view.setUint16(offset, 0, true);
  offset += 2;
  if (offset !== out.length) throw new Error("Could not pack the section files.");
  return out;
}
