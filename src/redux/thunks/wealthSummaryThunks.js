import { setResume } from '../actions/wealthSummaryActions'
import { api } from "../../api/";
import { gql } from "@apollo/client";

export const getWealthSummary = (dispatch) => {
    const queryWealthSummary = gql`
    query queryWealthSummary {
        wealthSummary(limit: 1) {
            id
            cdi
            gain
            hasHistory
            profitability
            total
          }
    }
    
`
    api.query({
        query: queryWealthSummary
    }).then((res) => {
        console.log(res)
        if (res.data.wealthSummary_by_pk !== null) {
            dispatch(setResume(res.data.wealthSummary[0]))
        }

    })
}