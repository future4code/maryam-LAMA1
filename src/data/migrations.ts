import { connection } from "./connection";

const printError = (error:any) => {
    console.log(error.sqlMessage || error.message)
};

const createTables = async () => {
    await connection
    .raw(
    `
    CREATE TABLE IF NOT EXISTS nome_tabela_bandas (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        music_genre VARCHAR(255) NOT NULL,
        responsible VARCHAR(255) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS nome_tabela_shows (
        id VARCHAR(255) PRIMARY KEY,
        week_day VARCHAR(255) NOT NULL,
        start_time INT NOT NULL,
        end_time INT NOT NULL,
        band_id VARCHAR(255) NOT NULL,
        FOREIGN KEY(band_id) REFERENCES nome_tabela_bandas(id)
    );

    CREATE TABLE IF NOT EXISTS nome_tabela_usuários (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(255) NOT NULL DEFAULT "NORMAL"
    );
    `
    )
    .then(()=>{
        console.log("Tabelas criadas com sucesso!")
    })
    .catch(printError);
}
const closeConnection = () => {
    connection.destroy()
}
createTables()
.finally(closeConnection)