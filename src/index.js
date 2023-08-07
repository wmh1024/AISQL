import {marked} from "marked"
import axios from "axios"

const submitToast = new bootstrap.Toast(document.querySelector('.submit-toast'))
const successToast = new bootstrap.Toast(document.querySelector('.success-toast'))
const textareain = document.querySelector('.in')
const textareasql = document.querySelector('.sql')
document.querySelector('.submit').addEventListener('click', () => {
    submitToast.show()
    document.querySelector('.out').innerHTML = '数据已提交，等待生成...'
    axios({
        url: 'https://api.openai-proxy.com/v1/chat/completions',
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer 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'
        },
        data: {
            model: 'gpt-3.5-turbo',
            messages:
                [{
                    "role": "user",
                    "content": "我先说一下我的表结构" + textareasql.value
                }, {
                    "role": "assistant",
                    "content": "好的，我看到了一个表结构，请问有什么可以帮到你的吗？"
                }, {
                    "role": "user",
                    "content": "我希望你充当一个数据库专家的角色，当我问你 sql 相关的问题时，我需要你转换为标准的 sql 语句。你的回复只能是sql语句，如果听懂请回复明白"
                }, {
                    "role": "assistant",
                    "content": "明白"
                }, {
                    "role": "user",
                    "content": textareain.value + '，你的回复只能是sql语句。不要说除了sql之外的其他话。'
                }]
        }
    }).then(r => {
        // document.querySelector('.out').innerHTML = marked(r.data.choices[0].message.content).match(/<\s*code[^>]*>[\s\S]*<\s*\/\s*code\s*>/g)[0].replace(/\n/g, '<br/>')
        // if (marked(r.data.choices[0].message.content).match(/<\s*code[^>]*>[\s\S]*<\s*\/\s*code\s*>/g)[0]) {
        //     document.querySelector('.out').innerHTML = marked(r.data.choices[0].message.content).match(/<\s*code[^>]*>[\s\S]*<\s*\/\s*code\s*>/g)[0]
        // } else {
        //     document.querySelector('.out').innerHTML = marked(r.data.choices[0].message.content)
        // }
        successToast.show()
        document.querySelector('.out').innerHTML = marked(r.data.choices[0].message.content)
    })
})
