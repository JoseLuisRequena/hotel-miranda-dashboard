import styled from "styled-components"
import { StyledButton } from "../styles/StyledButton";
import arrayContacts from "../json/Contacts.json"

const colors = {
    green: '#799283',
    hardGreen: '#135846',
    lightGreen: '#EBF1EF',
    red: '#E23428',
    lightRed: '#FFEDEC',
    light: '#B2B2B2',
    bgGray: '#F8F8F8',
    gray: '#6E6E6E',
    borderGray: '#D4D4D4',
};
const CardContact = styled.div`
width: 430px;
align-items: initial;
border: 1px solid #c5c5c5;
border-radius: 20px;
margin: 0 10px;
color: #c5c5c5;
display: flex;
justify-content: space-between;
padding: 15px;
background: #fff;
justifyContent: center;
flex-direction: column;
&:hover {
    box-shadow: 0px 16px 30px #00000030;
  }
`;
const CardContacts = styled.div`
max-width: 1100px;
margin: 50px auto;
overflow-x: auto;
max-height: 500px;
border-radius: 20px;
align-items: initial;
border: none;
text-align: left;
padding: 20px;
background: #fff;
color: #393939;
`;

export const Contact = () => {
    return(
        <CardContacts >
            <h1>Latest Review by Customers</h1>
            <div style={{display: "flex"}}>
            {arrayContacts.map(
                contact => (
                    <CardContact >
                        <div style={{
                            width: "400px",
                            textAlign: "initial",
                            marginBottom: "50px"
                            }}  
                        >
                        {contact.comment}
                        </div>
                        <div style={{    
                            display: "flex",
                            justifyContent: "space-around"
                            }}
                        >
                            <div style={{    
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                                }}
                            >
                                {contact.id}
                                <div style={{
                                        marginLeft: "20px",
                                        textAlign: "initial"
                                    }}
                                > 
                                    {contact.name}<br/>
                                    {contact.date}
                                </div>
                            </div>
                            <button style={{
                                cursor: "pointer",
                                padding: "10px 15px",
                                border: "3px solid #135846",
                                fontSize: "16px",
                                fontWeight: "800", 
                                color: colors.hardGreen,
                                borderRadius: "30px"}}>V</button>
                            <button style={{ 
                                cursor: "pointer",
                                padding: "10px 15px",
                                border: "3px solid #E23428",
                                fontSize: "16px",
                                fontWeight: "800",
                                borderRadius: "30px",
                                color: colors.red}}>X</button>
                        </div>
                    </CardContact>
                )
            )}
            </div>
        </CardContacts >
    )
}