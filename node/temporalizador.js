const schedule = require('node-schedule')

const terafa1 = schedule.scheduleJob('*/5 * 8 * * 4', function () {
    console.log('executando tarefa 1', new Date().getSeconds())
})

setTimeout(function() {
    terafa1.cancel()
    console.log('Cancelando tarefa 1...')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 8
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('executando terefa 2', new Date().getSeconds())
})