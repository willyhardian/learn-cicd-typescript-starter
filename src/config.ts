import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfig;
  api: APIConfig;
};

type APIConfig = {
  port: string | undefined;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};

export const config: Config = {
  api: {
    port: process.env.PORT,
    filepathRoot: "./src/assets",
  },
  db: {
    url: "libsql://notely-db-willyhardian.aws-ap-northeast-1.turso.io?authToken=eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NjEyMjIxNjgsImlkIjoiYWMzYjVlMDctZTdmYi00NjQ3LWFjM2EtM2RlZGJhYmFjMGEwIiwicmlkIjoiMTZjYWI3NWItZjgxYy00Y2ZlLTk0YmMtMDY3ZmZmNWY3YzI1In0.G0S33-hPEouvSIH7lxPO_af5FOEWR0QTXC7lTd_m4PD1jqPSgUtD1peoLUzlYvch2nwiBUv6rMtoTsx3zZ0BDg",
  },
};
