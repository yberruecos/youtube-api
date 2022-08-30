import {describe,expect,test,beforeEach,vi} from 'vitest'
import {screen,render} from '@testing-library/react'
import LayoutResults from './layoutResults';
import mockSearchData from '../../mocks/mockSearchData.json'

describe('LayoutResult test',()=>{
    test('Render data from endpoint mock',()=>{
        beforeEach(() => {
            vi.mock('../../hooks/useGetSearch', () => {
                return {
                    default: ()=> {
                        return {
                            error:null,
                            loading:null,
                            data:mockSearchData,
                            search:'',
                            setSearch:{}
                        }
                    }
                }
            })
        });

        const {container} = render(<LayoutResults></LayoutResults>)
        const videoCard=container.getElementsByTagName('article');
        expect(videoCard.length).toBe(5)
    })
})