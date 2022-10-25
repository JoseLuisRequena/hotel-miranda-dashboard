import styled from 'styled-components';
//import colors from '../../style/colors';

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

const KpiItem = styled.div`
  max-width: 240px;
  min-width: 190px;
  background-color: white;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: start;
  align-items: center;
  &:hover {
    box-shadow: 0px 16px 30px #00000014;
    .kpi__icon {
      color: white;
      background-color: ${colors.red};
    }
  }
  .kpi {
    &__icon {
      color: ${colors.red};
      background-color: ${colors.lightRed};
      border-radius: 8px;
      padding: 10px;
      margin-right: 22px;
    }
    &__number {
      font-size: 20px;
      font-weight: 600;
      line-height: 46px;
      display: block;
    }
    &__text {
      font-size: 14px;
      font-weight: 200;
      line-height: 21px;
      white-space: nowrap;
      display: block;
    }
  }
`;

const KpiContainer = styled.div`

  display: flex;
  justify-content: space-evenly;
  margin: 0 auto 40px auto;
  @media only screen and (max-width: 1500px){
    flex-wrap: wrap;
  }
`;

function KpiRow({ children }) {
  return (
    <KpiContainer>
      {children}
    </KpiContainer>
  );
}

function Kpi({ data }) {
  return (
    <KpiItem>
      <span className="kpi__icon">
        {data.icon}
      </span>
      <div>
        <span className="kpi__number">{data.number}</span>
        <span className="kpi__text">{data.text}</span>
      </div>
    </KpiItem>
  );
}

export { Kpi, KpiRow };