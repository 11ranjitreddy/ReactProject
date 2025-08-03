  import React from 'react';
  import { shallow, mount } from 'enzyme';
  import CohortDetails from './CohortDetails';
  import { CohortsData } from './Cohort';

  describe('Cohort Details Component', () => {

   test('should create the component', () => {
  const dummyCohort = {
    cohortCode: 'INTADMDF10',
    technology: '.NET FSD',
    startDate: '2023-01-01',
    endDate: '2023-06-01'
  };
  const wrapper = shallow(<CohortDetails cohort={dummyCohort} />);
  expect(wrapper.exists()).toBe(true);
});

    test('should initialize the props', () => {
      const testCohort = CohortsData[0];
      const wrapper = mount(<CohortDetails cohort={testCohort} />);
      expect(wrapper.props().cohort).toEqual(testCohort);
    });

    test('should display cohort code in h3', () => {
      const testCohort = CohortsData[0];
      const wrapper = mount(<CohortDetails cohort={testCohort} />);
    expect(wrapper.find('h3').text()).toContain(testCohort.cohortCode);

    });

    test('should always render same html', () => {
      const testCohort = CohortsData[0];
      const wrapper = shallow(<CohortDetails cohort={testCohort} />);
      expect(wrapper.html()).toMatchSnapshot();
    });

  });
