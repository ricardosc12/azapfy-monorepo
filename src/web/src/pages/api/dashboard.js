function delay(time=2000) {
    return new Promise(resolve=>setTimeout(resolve,time))
}

export default async function handler(req, res) {
    await delay(200)
    
    const charts = [
        {
            labels:[
                'Vendas', 'Anúncios', 'Filiações', 'Confirmações'
            ],
            data: [
                15,18,19,25
            ],
            colors:[
                '#5F0A87', '#20BF55','#A40606','#380036'
            ]
        },
        {
            labels:[
                'Clicks', 'Entradas', 'Saídas', 'Permanência'
            ],
            data: [
                30,40,25,35
            ],
            colors:[
                '#7EE8FA', '#EEC0C6','#EC9F05','#FF4E00'
            ]
        },
        {
            labels:[
                'Filmes', 'Séries', 'Documentários', 'Novelas'
            ],
            data: [
                100,105,203,60
            ],
            colors:[
                '#9E768F', '#9FA4C4','#B91372','#6B0F1A'
            ]
        },
        {
            labels:[
                'Youtube', 'Google', 'Facebook', 'Filiados'
            ],
            data: [
                30,90,20,60
            ],
            colors:[
                '#F2A65A', '#772F1A','#233329','#63D471'
            ]
        },
    ]

    const widgets = [
        {title: "Lucro líquido", text: 'Acima do esperado', value:'R$ 10.530.301,67', percent: 90},
        {title: "Taxa de aprovação", text: 'Desempenho satisfatório', value:'89.9%', percent: 89.9}
    ]
    // return new Response(
    //     JSON.stringify({
    //         widgets,
    //         charts
    //     }),
    //     {
    //         status:200,
    //         headers: {
    //             "Access-Control-Allow-Origin:": req.headers.origin,
    //             'content-type': 'application/json',
    //         }
            
    //     }
    // )
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)

    res.status(200).json({
        widgets,
        charts
    })
}