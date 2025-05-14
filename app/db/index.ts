// import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/libsql';

// config({ path: '.env' }); // or .env.local -- NOT WORKING
//  dont need (hardcoding url/token since reference didn't work)

const TURSO_CONNECTION_URL='libsql://foodez-db-evelynminkyoungso.aws-us-east-1.turso.io';
const TURSO_AUTH_TOKEN='eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDcxNjQ5MTMsImlkIjoiMzg5ZTY0YTMtNmNlZS00ODFiLTkxYWMtNDY0MTY0ZjI0MzNhIiwicmlkIjoiY2Y5Yzk4YjctNzViOC00NTNhLTk4Y2MtYWM2OTg1YThmMWI0In0.I40UmUWo7c2UOgzZoIbGAMwr_SD-TpL4ic70yFFx6H7696Jyz6m7oyRAYe4r-Gyqw9kkzVda6mYHvPrWVp6XCg'

export const db = drizzle({ 
    connection: {
        url: TURSO_CONNECTION_URL,
        authToken: TURSO_AUTH_TOKEN,
}});
