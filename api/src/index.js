/*
import express from 'express'
import postgraphile from 'postgraphile'
// import PluginName from './plugins/PluginName'

// const plugins = [
//   PluginName
// ]

const app = express()

const pgConnectionString = 'postgresql://postgres:nN51442017@mygramm.cyuwocwtcvxr.us-east-1.rds.amazonaws.com:5432/mygramm'

const pgSchemasGramm = 'public'
const pgOptions = {"watchPg": true, "graphiql": true, "exportJsonSchemaPath": "./schema.json", "exportGqlSchemaPath": "./schema.gql", "showErrorStack": true, "pgDefaultRole": "postgres"}

// pgOptions.appendPlugins = plugins

//app.use(postgraphile(pgConnectionString, [...pgSchemas, ...pgSchemasGramm], pgOptions))
app.use(postgraphile(pgConnectionString, pgSchemasGramm, pgOptions))


app.listen(3000, ()=> console.info('Postgraphile API started.\n'))
*/
import express from 'express'
import postgraphile from 'postgraphile'

const app = express();

const pgConnectionString = 'postgresql://postgres:nN51442017@mygramm.cyuwocwtcvxr.us-east-1.rds.amazonaws.com:5432/mygramm'
//const pgConnectionString = 'postgresql://rpg_app:localdev@localhost:8001/localdb'

app.use(postgraphile(pgConnectionString, 'public',
	{
		"watchPg": true,
		"graphiql": true,
		"exportJsonSchemaPath": "./schema.json",
		"exportGqlSchemaPath": "./schema.gql",
		"showErrorStack": true
	}
))

app.listen(5000, ()=> console.info('Postgraphile API started.\n'));