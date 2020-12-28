export const state = () => ({
    allPersons: [],
    page: 1,
    maxPage: 1
})

export const mutations = {
    ADD_Persons(state, persons) {
        state.allPersons.push(...persons)
    },
    CHANGE_Page(state) {
        state.page++
    },
    CHANGE_MaxPage(state, maxPage) {
        state.maxPage = maxPage
    },
}

export const actions = {
    changePage({ commit, state }) {
        if (state.maxPage != state.page || state.maxPage == 1)
            commit("CHANGE_Page")
    },

    addPersons({ commit, state }) {
        return new Promise((resolve, reject) => {
            let page = state.page
            const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

            if (state.maxPage != state.page || state.page == 1)
                this.$axios
                    .$get(`${url}`)
                    .then((response) => {
                        commit("CHANGE_MaxPage", response.info.pages)
                        commit("ADD_Persons", response.results)
                        resolve(response)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        })
    }

}

export const getters = {
    allPersons: state => {
        return state.allPersons;
    },
    person_data: state => id => {
        return state.allPersons.filter(person => person.id == id)[0];
    },
    page: state => {
        return state.page;
    }
}