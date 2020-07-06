# BMKG REST API
Unofficial Restful Api [bmkg.go.id](https://bmkg.go.id) built with node.js + express.js

## Sample Active API
http://bmkg-scrap.herokuapp.com/

## Usage
1. Clone
```bash
git clone https://github.com/febryardiansyah/bmkg.go.id-rest-api.git
```
2. Install dependencies
> npm i express cheerio request
3. Run npm run dev (Development)
4. Open http://localhost:3000/

## Routes
- / => Main Web Documentation
- /api => not found route
- /api/cuaca => Weather all province in indonesia
- /api/cuaca/[provincename] => Weather all city in specific province
- /api/cuaca/bandara => Weather in airplane indonesia
- /api/cuaca/dunia => Weather in all countries
- /api/udara => Air condition in indonesia
- /api/gempa/terkini => latest earthquake in indonesia
- /api/gempa/dirasakan => earthquake felt