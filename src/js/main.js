import {
    Requisicoes
} from "./request.js"

class Dashboard {
    static renderThead() {
        const table = document.querySelector('table')

        const tHead = document.querySelector('thead')
        const header = document.createElement('tr')

        const headerPosicao = document.createElement('th')
        const btnPosicao = document.createElement('button')
        const headerPais = document.createElement('th')
        const headerOuro = document.createElement('th')
        const btnOuro = document.createElement('button')
        const headerPrata = document.createElement('th')
        const btnPrata = document.createElement('button')
        const headerBronze = document.createElement('th')
        const btnBronze = document.createElement('button')
        const headerTotal = document.createElement('th')

        header.classList.add('header')
        headerPais.classList.add('pais')
        btnOuro.classList.add('btnMedal')
        btnBronze.classList.add('btnMedal')
        btnPrata.classList.add('btnMedal')
        btnPosicao.classList.add('btnPosicao')

        headerOuro.classList.add('headerOuro')

        btnBronze.addEventListener('click', async (event) => {
            event.preventDefault()

            const dados = await Requisicoes.getCountry()

            const bronze = this.orderCountryBronze(dados)

            this.renderCountry(bronze)

        })

        btnPrata.addEventListener('click', async (event) => {
            event.preventDefault()

            const dados = await Requisicoes.getCountry()

            const prata = this.orderCountrySilver(dados)

            this.renderCountry(prata)
        })

        btnOuro.addEventListener('click', async (event) => {
            event.preventDefault()

            const dados = await Requisicoes.getCountry()

            const gold = this.orderCountryGold(dados)

            this.renderCountry(gold)
        })

        btnPosicao.addEventListener('click', async (event) => {
            event.preventDefault()
            this.renderCountry(dados)
        })


          btnPosicao.innerText = 'Posição'
        headerPais.innerText = 'País'
        btnOuro.innerText = 'Ouro'
        btnPrata.innerText = 'Prata'
        btnBronze.innerText = 'Bronze'
        headerTotal.innerText = 'Total'

        headerBronze.append(btnBronze)
        headerPrata.append(btnPrata)
        headerOuro.append(btnOuro)
        headerPosicao.append(btnPosicao)
        header.append(headerPosicao, headerPais, headerOuro, headerPrata, headerBronze, headerTotal)
        tHead.append(header)
        table.append(tHead)
    }

    static renderCountry(array) {
        const table = document.querySelector('table')

        const tBody = document.querySelector('tbody')

        tBody.innerHTML = ''

        const dados = array.forEach((element, index) => {

            const tr = document.createElement('tr')

            const posicao = document.createElement('td')
            const pais_nome = document.createElement('td')
            const icon = document.createElement('img')
            const ouro = document.createElement('td')
            const prata = document.createElement('td')
            const bronze = document.createElement('td')
            const total = document.createElement('td')

            posicao.classList.add('posicao')

            icon.classList.add('icon')
            pais_nome.classList.add('pais_nome')

            ouro.classList.add('ouro')
            prata.classList.add('prata')
            bronze.classList.add('bronze')
            total.classList.add('total')

            icon.width = 30

            posicao.innerText = `${index + 1}° `
            pais_nome.innerText = element.country
            icon.src = element.flag_url
            ouro.innerText = element.medal_gold
            prata.innerText = element.medal_silver
            bronze.innerText = element.medal_bronze
            total.innerText = element.medal_gold + element.medal_silver + element.medal_bronze

            pais_nome.append(icon)
            tr.append(posicao, pais_nome, ouro, prata, bronze, total)
            tBody.append(tr)
            table.append(tBody)

        })
        return dados
    }

    static orderCountryBronze(data) {
        return data.sort((a, b) => {
            if (a.medal_bronze > b.medal_bronze) {
                return -1
            } else if (a.medal_bronze < b.medal_bronze) {
                return 1
            } else {
                return 0
            }
        })
    }

    static orderCountrySilver(data) {
        return data.sort((a, b) => {
            if (a.medal_silver > b.medal_silver) {
                return -1
            } else if (a.medal_silver < b.medal_silver) {
                return 1
            } else {
                return 0
            }
        })
    }

    static orderCountryGold(data) {
        return data.sort((a, b) => {
            if (a.medal_gold > b.medal_gold) {
                return -1
            } else if (a.medal_gold < b.medal_gold) {
                return 1
            } else {
                return 0
            }
        })
    }

    static RenderFilter(data, country) {
        const dados = data.filter((element) => {
            return element.country.toLowerCase().includes(country)
        })
        return dados
    }

    static async CountryFilter() {
        const pesquisarBtn = document.querySelector('.pesquisar-btn')

        const data = await Requisicoes.getCountry()

        pesquisarBtn.addEventListener('click', (event) => {
            event.preventDefault()

            const pesquisarInput = document.querySelector('.pesquisar-input')

            const pesquisar = this.RenderFilter(data, pesquisarInput.value.toLowerCase())

            this.renderCountry(pesquisar)

        })
    }
}


Dashboard.renderThead()

const dados = await Requisicoes.getCountry()
Dashboard.CountryFilter()

Dashboard.renderCountry(dados)