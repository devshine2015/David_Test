import flavorsReducer from '../app/reducers/flavors'

describe('>>>R E D U C E R --- Test flavorsReducer',()=>{
    it('+++ reducer for GET_FLAVORS_SUCCESS', () => {
        let state = {
          flavors: [],
          isLoading: false,
        };
        let expectedState = {
          flavors: [
            {
              name: "Test"
            }
          ],
          isLoading: false,
        }
        state = flavorsReducer(state,{type:"GET_FLAVORS_SUCCESS", result: [{ name: "Test"}]})
        expect(state).toEqual(expectedState)
    });
   
});