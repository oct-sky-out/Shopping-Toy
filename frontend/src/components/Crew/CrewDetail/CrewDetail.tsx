import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsPeopleFill } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';
import { v4 } from 'uuid';
import CrewWidget from './CrewWidget';
import { crewActions } from '../../../modules/crew';
import DetailBaseBorder from '../../../common/components/DetailBaseBorder';
import PreviousPageButton from '../../../common/components/PreviousPageButton';

// test data
import crewMock from '../../../excuteData/CrewMock/CrewMock';
import crewRewardMock from '../../../excuteData/CrewMock/CrewRewardMock';
import NextPageButton from '../../../common/components/NextPageButton';
import CrewService from '../../../lib/api/crewService';

interface MatchParam {
  id: string;
}

const CrewDetail: React.FC<RouteComponentProps<MatchParam>> = ({ match }) => {
  const history = useHistory();
  const normalCategory = [
    { icon: BsPeopleFill, title: '크루 인원', description: '100' },
    { icon: GiPositionMarker, title: '크루 지역', description: '서울 상도동' },
  ];
  const mockLeaderState = true;

  const dispatch = useDispatch();

  useEffect(() => {
    // new CrewService()
    //   .getCrewDetail(match.params.id)
    //   .then((data) => dispatch(crewActions.setCrewDetail(data)))
    //   .catch((reason) => console.error(reason));
  }, [match.params.id]);

  return (
    <DetailBaseBorder>
      <div className="flex items-center justify-between">
        <PreviousPageButton
          text="뒤로가기"
          onClick={() => history.goBack()}
          className="w-24 md:w-32 lg:w-40 py-4 flex justify-start items-start"
          iconSizeClassName="text-2xl md:text-3xl lg:text-4xl"
          tailwindTextSize="text-sm md:text-2xl"
        />
        {mockLeaderState ? (
          <NextPageButton
            text="크루 관리하기"
            nextPageURL={`/crew/${match.params.id}/management`}
            className="w-20 md:w-44 lg:w-52 py-4 flex justify-start items-start"
            iconSizeClassName="text-2xl md:text-3xl lg:text-4xl"
            tailwindTextSize="text-sm md:text-2xl"
          />
        ) : null}
      </div>
      <div className="w-full mx-auto my-0 py-5 flex flex-col flex-wrap justify-center items-center space-y-5">
        <div className="w-full flex justify-center items-center">
          <img
            src={crewMock.crew[0].imageUrl}
            alt=""
            className="w-48 rounded-full border-4 border-purple "
          />
        </div>
        <div className="text-2xl">{match.params.id}</div>
        <div className="text-lg">
          <span>오픈 채팅 : {}</span>
          <span>
            <a href="http://kakao.com/openchat">http://kakao.com/openchat</a>
          </span>
        </div>
      </div>
      <div className="space-y-5">
        <span className="pl-5 md:pl-0 text-lg">기본정보</span>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto gap-5">
          {normalCategory.map((category) => (
            <div key={v4()} className="flex justify-center">
              <CrewWidget
                Icon={category.icon}
                widgetTitle={category.title}
                widgetDescription={category.description}
                iconColor="#8b8bf5"
              />
            </div>
          ))}
        </div>
        <div>
          <span className="pl-5 md:pl-0 text-lg">리워드</span>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-auto gap-5 pt-10">
            {crewRewardMock.map((category) => (
              <div key={v4()} className="flex justify-center">
                <CrewWidget
                  Icon={category.icon}
                  widgetTitle={category.title}
                  widgetDescription={category.description}
                  iconColor="#8b8bf5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DetailBaseBorder>
  );
};

export default withRouter(CrewDetail);
