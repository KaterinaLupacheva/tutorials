const { GoogleSpreadsheet } = require("google-spreadsheet");
const secret = require("./secret.json");

const doc = new GoogleSpreadsheet(
  "1hDB6qlijcU5iovtSAisKqkcXhdVboFd1lg__maKwvDI"
);

const init = async () => {
  await doc.useServiceAccountAuth({
    client_email: secret.client_email,
    private_key: secret.private_key,
  });
};

const read = async () => {
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle.Sheet1;
  await sheet.loadHeaderRow();
  const colTitles = sheet.headerValues;
  const rows = await sheet.getRows({ limit: sheet.rowCount });

  let result = {};
  rows.map((row) => {
    colTitles.slice(1).forEach((title) => {
      result[title] = result[title] || [];
      const key = row[colTitles[0]];
      result = {
        ...result,
        [title]: {
          ...result[title],
          [key]: row[title] !== "" ? row[title] : undefined,
        },
      };
    });
  });
  console.log(result);
  return result;
};

init()
  .then(() => read())
  //   .then((data) => write(data))
  .catch((err) => console.log("ERROR!!!!", err));
