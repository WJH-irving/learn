// 请求 
import {
    getRepoList
}from '../api/repo'
import {
    create 
}from 'zustand'

export const useRepoStore = create((set) => ({
    repos:[], 
    loading:false,
    error:null,
    fetchRepoList: async (owner) => {
        // 业务
        set({ loading: true,error: null })
        try {
            const res = await getRepoList('WJH-irving')
            set({ repos: res.data })
        } catch (error) {
            set({ error :error.message,loading:false })

        } finally {
            set({ loading: false })
        }
    },
    getRepo: async (owner, repo) => {
        set({ loading: true,error: null })
        try {
            const res = await getRepo(owner, repo)
            set({ repos: res.data })
        } catch (error) {
            set({ error })
        } finally {
            set({ loading: false })
        }
    },
}));