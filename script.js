//============================
// JS 코드 전역 정의 시작
//============================

// (1) tarotData, haeunCombos, nameMap, firstValInterpret, secondValInterpret 등
//     모든 상수(객체)와 함수는 여기에 배치.

//====================================================
// 예: tarotData 간략 축약 (실사용시 전체 넣으세요)
const tarotData = {
    0: `0번 광대(The Fool): 
이 카드는 자유롭고 순수한 영혼을 상징하며, 어떤 틀에도 얽매이지 않고 새로운 시작을 두려워하지 않는 특징을 보여줍니다. 그러나 때로는 주변 현실을 고려하지 않고 무모한 도전을 할 수 있어 위험에 처하기도 합니다. 준비가 부족한 상태에서 출발하기에 시행착오를 겪기도 하지만, 오히려 그 과정을 통해 더욱 자유롭고 창의적인 길을 발견하기도 합니다. 광대는 외부의 시선보다 자기 자신이 느끼는 즐거움과 가능성을 우선하며, 풍류와 예술적 감각을 좋아할 수도 있습니다. 주변 상황에 대해 둔감해 보이지만, 한편으로는 그만큼 마음의 제약이 적어 혁신과 모험에 기꺼이 뛰어듭니다. 다만 지나친 자유는 계획 부족으로 이어져 성취가 더디거나 실수를 반복할 위험이 있으므로, 어느 정도의 책임감과 현실 감각을 함께 가져야 합니다. 이 '광대 사주'는 처음에는 어려움이 많을 수 있으나, 순수한 열정과 열린 마음으로 다양한 경험을 쌓으면, 머지않아 자신만의 독특한 길을 개척할 수 있는 큰 잠재력을 지닌 사주로 해석됩니다.`,

  1: `1번 마법사(The Magician): 
마법사는 뛰어난 기술과 손재주, 창의적 아이디어, 재빠른 임기응변을 상징합니다. 이 사주값은 대체로 재능이 많고 자신감도 높아서, 목표를 잡으면 누구보다도 빠르게 성취해내는 힘이 있습니다. 다만, 자신이 가진 ‘무한한 가능성’에 대한 확신이 지나치면 주변에서 거만하게 보거나, 구체적 준비 없이 앞서갈 위험이 있지요. 마법사가 지닌 손재주와 임기응변 능력은 문제해결에 강점을 보여 어떤 분야든 끈기 있게 파고들면 기적 같은 결과를 만들 수 있습니다. 예술, 기술, 영업, 연구 등 손과 머리를 쓰는 일에 잘 어울리고, 새로운 아이디어를 현실화하기 위해 노력하면 큰 성취를 거둘 수 있습니다. 그러나 과도한 자신감이 오히려 내면의 부족함을 가리고, 실행력 없이 말만 앞서가는 상태가 되지 않도록 주의해야 합니다. ‘겸손한 태도’와 ‘꾸준한 실천’이 함께할 때, 이 마법사 사주는 왕성한 개척 정신으로 누구도 넘보지 못할 독보적 자리를 확보할 것입니다.`,

  2: `2번 여사제(The High Priestess):
이 카드는 지적 능력, 비밀스러움, 직관력, 그리고 자기 내면에 집중하는 성향을 상징합니다. 사주풀이로 해석하면, 여사제 사주는 겉으로는 조용하고 차분해 보이지만, 실제론 깊은 내면 세계를 갖고 있고 사소한 부분까지 꼼꼼히 살피는 특징이 있습니다. 본인이 해결해야 한다고 믿는 문제에 대해서는 끝없이 고민하지만, 동시에 실행력이 부족해 타이밍을 놓치기 쉬우며, 결벽증이나 강박으로 이어질 수도 있습니다. 그러나 지혜와 직관이 뛰어나 남에게 조언을 잘해주고, 교육·연구·상담 등 앉아서 지식을 다루는 직업에 잘 어울립니다. 사랑에서도 쉽게 마음을 열지 않아 ‘차갑다’라는 인상을 줄 수 있으나, 일단 신뢰가 생기면 헌신적인 면모를 보이기도 합니다. 재물 면에서는 환경에 따라 변동이 생길 수 있으나, 지출 관리와 자기 체면이 강해 큰 위기는 잘 피할 수 있습니다. 여사제 사주는 ‘때를 기다려야 하는’ 운이 강해, 마음이 100% 확신을 품기 전에는 움직이지 않는 편이지만, 막상 결단할 땐 누구보다 빠른 행동력을 보이기도 합니다.`,

  3: `3번 여황제(The Empress):
여황제 카드는 풍요롭고 온화한 에너지를 상징하며, 물질적·정신적 풍요 모두를 끌어당길 수 있는 힘을 보여줍니다. 이 사주값을 가진 사람은 예술적 재능과 손재주가 있고, 매력과 사교성을 통해 주위 인맥도 다양하게 얻게 됩니다. 자존심이 강해 쉽게 포기하지 않지만, 싫어하는 일은 절대로 하지 않는 등 편애가 뚜렷한 면모가 있습니다. 넓은 마음으로 베푸는 태도를 지녔으나, 순간 욱하는 성격으로 구설수에 오르기도 하니, 발언과 대인관계에서 주의할 필요가 있습니다. 재물면에서는 행운이 따라 넘어져도 돈을 줍는 형국이나, 사치나 과소비로 인한 손실을 조심해야 합니다. 베풂이 많아 인복을 얻을 수 있으나, 욕심이 커질수록 안티도 늘어날 수 있어 겸손한 태도가 필수입니다. 예술·디자인·미용·부동산 등 미적·창의적 능력을 활용하는 직업과 궁합이 좋고, 일과 생활 속에서 ‘다양한 그릇’을 운영해 동시에 여러 활동을 즐기는 편입니다. 풍요를 누리면서도 늘 감사하고, 주변의 시기와 질투를 의식하기보다는 묵묵히 자기 길을 가는 것이 이 ‘여황제 사주’가 안정적으로 성장하는 비결입니다.`,

  4: `4번 황제(The Emperor):
황제 카드는 세속적 권위, 부, 성공, 책임감, 리더십을 상징하며, 사주풀이에서 이 값이 뜨면 강인한 정신력과 자수성가 기질을 내포한다고 해석합니다. 현실적인 부와 권력을 쟁취하는 데 능숙하고, 한 번 마음먹은 목표는 완벽하게 달성하려는 의지가 강합니다. 다만 타협을 모르는 성격 탓에 주위 사람과 부딪히거나, 자신의 높은 기준을 남에게도 똑같이 요구해 갈등을 일으킬 가능성이 있으므로, 부드러운 리더십을 함께 갖춰야 합니다. 여성일 경우에도 남성적 강함과 책임감을 발휘해 가정과 직장 모두를 이끌 수 있는데, 그만큼 스트레스를 잘 받기에 주의가 필요합니다. 돈 운은 노력한 만큼 벌게 되며, 횡재운도 종종 있으나, 재산이 많아도 늘 불안감을 느낄 수 있어 심리적 안정을 찾아야 합니다. 직장·사업 모두 긍정적이나, 너무 확장하다 빨리 지치는 경우가 생기니 무리수를 두지 않는 게 좋습니다. 애정 면에서는 안정적인 파트너십을 추구하지만 감정 표현이 서툴러 상대가 답답해할 수 있으니, 때로는 마음을 여는 연습이 필요합니다.`,

  5: `5번 교황(The Hierophant):
이 값은 지도자·조언자·도덕적 양심을 대표하는 카드로, 사주풀이상 머리가 좋고 원칙을 지키려는 성향이 강하다고 해석됩니다. 생각은 많지만 실천력 부족으로 우유부단해질 때가 있으며, 이론과 규칙을 중시해 주변에서 ‘고집이 세다’라거나 ‘까다롭다’고 여길 수 있습니다. 말은 적으나 핵심을 찌르는 조언을 잘해주어, 주위에서 멘토나 정신적 리더로 추앙받을 가능성이 높습니다. 그러나 본인 스스로 실패를 두려워해 안전한 길만 찾으면 발전 속도가 느려집니다. 사업보다는 교육·교직·철학·심리·부동산·중개·금융 등 말하거나 지식을 다루는 직업을 선호하며, 여유만 생긴다면 남을 돕는 일에도 관심이 많습니다. 애정 면에서는 상대를 지배하려 하거나, 한쪽이 과하게 희생하는 사랑이 될 수도 있으니, 융통성 있게 대처할 필요가 있습니다. 재물은 ‘티끌 모아 태산’ 형태가 적합하고, 너무 큰 돈을 빌려주거나 ‘한 방’을 노리는 투자는 손실을 볼 위험이 큽니다. 무엇보다 이 교황 사주는 자신의 많은 생각을 가끔은 행동으로 옮기는 용기가 필요합니다.`,

  6: `6번 연인(The Lovers):
연인은 사랑, 협력, 유혹, 선택, 인간적 교류를 상징합니다. 이 사주값을 가진 사람은 대인관계가 넓고 인기가 많으며, 감수성이 풍부해 주변에 따뜻한 인상을 줍니다. 다만 재능이 많아 여러 일에 손대다가 집중력이 분산될 수 있고, 쉬운 길을 선호해 약간 방랑벽이 있을 수도 있습니다. 사랑에서는 자유로운 스타일이어서 구속을 싫어하고, 남녀 불문하고 바람기나 유혹에 약한 면이 있지만, 진심으로 좋아하는 상대에게는 헌신적이 될 수 있습니다. 직업적으로는 예술·패션·미용·연예·방송·심리·서비스 계열이 잘 맞으며, 사람들과의 네트워킹을 통해 성공 기회를 많이 얻기도 합니다. 재물은 움직일 때 들어오지만 과소비나 유흥으로 새어나가기도 하므로 주의가 필요합니다. 시험·학업도 확실한 목표만 세운다면 성취할 운이 있고, 사랑·금전·인맥에서 ‘귀인’을 만나 도움받을 수 있는 사주입니다. 단, 마음이 편해지면 의욕을 쉽게 잃어 우울감에 빠질 수 있으니, 늘 목적의식을 갖는 것이 좋습니다.`,

  7: `7번 전차(The Chariot):
전차는 강한 추진력, 역동적인 전진, 두 가지 일을 동시에 할 수 있는 능력 등을 상징합니다. 이 사주값을 지닌 사람은 목표가 생기면 지체 없이 돌파하고, 경쟁 상황에서도 주저없이 나아가는 리더형입니다. 다만, ‘목적’에만 몰두하다 보면 주변을 돌보지 않는 이기적 태도가 될 수 있으니 조심해야 합니다. 또한 승부욕이 은근히 강해 작은 실패에도 과도한 스트레스를 받을 위험이 있습니다. 직업적으로는 활동성과 이동이 많은 업종(운송, 항공, 해외·무역, 정보통신, 스포츠, 군·경찰)에 잘 맞고, 여행이나 철도, 물 관련 일도 성공 확률이 높습니다. 재물은 노력만큼 커지지만, 너무 빨리 투자나 확장을 하면 책임이 가중될 수 있어 분수 지키기가 필요합니다. 애정 면에서는 정열적이고 리드하는 스타일이지만, 순간적인 바람기나 스쳐가는 연애를 즐길 수도 있어 신중히 사랑을 대해야 합니다. 시험이나 학업은 목표 의식만 확실하면 남보다 빠르게 성취할 수 있으므로, 갈팡질팡하지 말고 한 곳에 집중하는 태도가 중요합니다.`,

  8: `8번 힘(Strength):
이 카드는 ‘외유내강’, 강한 내적 의지, 인내심, 고난 극복을 상징합니다. 8번 사주는 승부욕과 생활력이 강해 어떠한 시련이 오더라도 꿋꿋이 버티며 끝내 이겨낼 수 있는 힘을 지녔습니다. 대인관계에서는 책임감이 강해 리더 역할을 도맡기도 하지만, 지나친 오지랖이 독이 될 수 있고, 주변 사람들 도움 없이 혼자 일 처리를 하다 과로로 쓰러질 위험도 있습니다. 고집이 세고 다혈질적인 면이 있어, 누군가가 본인 기준에 어긋나면 쉽게 화를 낼 수 있지만, 또 금방 풀리는 편입니다. 직업적으로는 공무원·사법·검사·행정·철도·군경·노동·치과의사·동물조련 등, 사회의 안전과 질서를 책임지는 분야가 잘 맞습니다. 재물 운도 있지만 한땀 한땀 모으는 타입이라 갑작스러운 횡재는 드물고, 억지로 무리하면 손실을 볼 수도 있습니다. 애정 면에서는 지고지순하지만 집착을 보일 수 있으니 주의해야 하며, 시험·학업도 남보다 두 배 노력하면 큰 성공을 거둘 운세입니다. 한마디로, 인내와 책임, 그리고 강한 삶의 의지로 묵묵히 전진하는 ‘대기만성형’ 사주입니다.`,

  9: `9번 은둔자(The Hermit):
고독, 내면 탐구, 인내, 학문적 탐색을 상징하는 카드입니다. 9번 사주는 말수가 적고, 조용히 혼자 연구하거나 생각을 정리하는 시간을 매우 중요하게 여깁니다. 사교적으로 보이지 않을 수 있지만, 사실은 지적 욕구와 호기심이 강해 필요하면 깊이 파고드는 학자적 면모를 갖춥니다. 타인에게 속내를 잘 털어놓지 않아 답답함을 줄 수 있고, 스스로도 외로움을 즐긴다고 느끼지만 때론 우울감에 빠지기 쉽습니다. 직업적으로는 연구·교육·의료·역술·심리상담·예술 분야 등에 많으며, 한 분야를 오랫동안 파면 말년에 큰 성과를 얻을 가능성이 높습니다. 재물운은 말년에 상승이 많으나, 주변 환경에 따라 돈이 잘 새기도 하므로, 투자보다는 부동산 등 안정 자산을 권장합니다. 애정에서는 쉽게 깊은 관계를 맺지 못하고 외사랑이나 고독한 사랑을 할 수 있으며, 결혼 시기도 빠르거나 늦거나 양극단으로 나뉠 수 있습니다. 이 ‘은둔자 사주’는 학자나 수도자처럼 고독 속에서 진가를 발휘하기 때문에, 자신만의 철학을 지키며 사는 모습이 어울립니다.`,

  10: `10번 운명의 수레바퀴(Wheel of Fortune):
이 값은 인생의 큰 전환점, 예측 불가능하지만 운명적 기회와 행운이 섞인 흐름을 상징합니다. 10번 사주는 변화가 잦고, 반복적 굴곡과 반전을 경험하기도 하지만, 이를 통해 다양한 경험과 깨달음을 얻어낼 수 있습니다. 낙관적이고 활동적이면 상승의 기운을 잘 잡아 크게 발전할 수 있으나, 부정적이고 소극적이면 반대로 빠르게 추락할 가능성도 있습니다. 그래서 운명의 수레바퀴 사주는 ‘내가 마음먹기에 달렸다’는 말이 어울립니다. 직업 변화가 잦거나, 여러 분야를 옮겨 다니며 경력을 쌓을 수 있으나, 궁극적으로 한 우물을 파야 큰 성공이 온다는 메시지도 담고 있습니다. 재물 운은 들어오는 것도 많지만 나가는 것도 많아, 계획적인 저축 습관이 필요하고, 부정적 투기나 위험성 높은 도박은 피해야 합니다. 사랑에서도 운명적인 만남이 있을 확률이 높으니 스스로 닫혀있지 말고 기회를 잡아보는 것이 좋습니다. 인생은 끊임없이 돌고 도는 것이니, ‘어렵다고 포기하지 말고, 기회가 왔을 때 적극적으로 시도하라’가 이 카드의 핵심 조언입니다.`,

  11: `11번 정의(Justice):
공정, 균형, 이성적 판단을 상징하며, 사주풀이상 꼼꼼하고 합리적인 사고방식을 갖춘 사람이 많습니다. 이들은 틀과 규칙을 중시해, 쉽게 감정적으로 치우치지 않으며, ‘옳고 그름’을 명확히 구분하려 합니다. 남자가 이 숫자를 가졌다면 섬세하면서 원칙주의자일 수 있고, 여자는 결단력이 있지만 개인주의 성향이 강할 수 있습니다. 재물은 계획적으로 차근차근 모아가는 편이지만, 다른 사람과 돈거래에서 지나치게 까다롭게 굴면 갈등이 생길 수 있습니다. 직업적으로는 판사·변호사·세무사·공무원 등 법이나 공공성, 안정성을 선호하거나, 꼼꼼한 분석이 필요한 직종(금융, 회계, 무역)에서 두각을 나타냅니다. 애정 면에서는 쉽게 속내를 드러내지 않고, 자기 기준이 확실해 철벽 같은 인상을 줄 수 있으니, 유연한 태도를 배우면 장기적으로 더 평온한 사랑을 이어갈 수 있습니다. 한편 너무 강한 원칙을 고수하다가 실수를 용납 못해 스스로나 주변을 힘들게 만들 수 있으니, 때로는 ‘차선’을 인정하며 융통성 있게 대처하는 지혜가 필요합니다.`,

  12: `12번 매달린 사람(The Hanged Man):
이 카드는 한 걸음 뒤로 물러나 세상을 거꾸로 보거나, 정체된 상태에서 희생과 사색을 하는 의미를 지닙니다. 12번 사주는 머리는 좋고 독창적이지만, 변덕이 심하고 인내심이 부족해 쉽게 지치거나 실망할 위험이 있습니다. 한편, 자기만의 세계가 강해 누가 먼저 나서 칭찬해주거나 자신감을 올려주면 잠재력을 폭발시키기도 합니다. 무언가를 시작하기 전에 고민만 길어지는 경향이 있어, 준비 부족이나 망설임으로 기회를 놓치는 일도 흔합니다. 사업이나 직장을 옮기는 건 신중하게 살피되, 현실에 충실하며 내공을 쌓아야 성공이 가능합니다. 재물은 돈이 들어와도 주머니가 거꾸로 된 듯 샐 수 있으니, 지인과 금전거래는 특히 피하는 게 좋습니다. 사랑에서는 헌신적이지만 의외로 지치는 속도가 빨라 스스로를 괴롭히는 면모가 있습니다. 건강도 뼈나 발목, 허리 등에 약점이 있을 수 있고, 위장이나 소화 능력도 떨어질 수 있으니 규칙적인 생활이 중요합니다. 결국 이 ‘매달린 사람 사주’는 ‘자기점검과 재충전’을 통해 나중에 더 높은 곳으로 올라가기 위한 시기를 견디는 상징이라 할 수 있습니다.`,

  13: `13번 죽음(Death):
죽음 카드는 한 사이클의 종말과 새로운 시작을 의미하며, 피할 수 없는 변화의 문턱이라 볼 수 있습니다. 13번 사주는 큰 전환점을 한두 번 이상 극적으로 맞이할 운이 있으며, 옛 자아를 버리고 새롭게 태어나는 과정을 반복할 수 있습니다. 속도전이 빠르고, 남들보다 먼저 결단을 내려 움직이지만, 한 번 포기하게 되면 미련 없이 모든 걸 정리해버릴 수 있습니다. 직업적으로는 생명·의료·결단이 필요한 분야(외과, 한의학, 침술, 정치 등)와 궁합이 좋지만, 성급함과 무기력이 번갈아 나타날 수도 있어 자신만의 템포를 잘 조절해야 합니다. 재물은 크게 벌 수도 있지만 바닥을 치는 경우도 있고, ‘복불복 인생’이라 할 만합니다. 애정 면에서는 쉽게 끝나거나 다시 시작되는 패턴을 겪을 수 있고, 합이 안 맞는 상대라면 이번 생에서는 인연을 이어가기 어려운 느낌도 있습니다. 시험·학업은 노력이 기대만큼 안 나올 수 있으며, 정체기를 겪다가 ‘새로운 과목·진로로 갈아타는’ 전환이 좋을 수 있습니다. 이 사주값은 ‘옛 것을 비우고 새롭게 거듭나야만’ 진정한 성장을 이룰 수 있음을 보여줍니다.`,

  14: `14번 절제(Temperance):
절제는 ‘중용, 조화, 인내, 순리대로 흘러가는 조정’을 상징합니다. 14번 사주인 사람은 사교성이 좋고 배려심이 있으며, 활발하지만 상대를 헤아리는 면모가 강해 모임에서 호감도가 높습니다. 감정 기복이 적고 평온함을 추구하지만, 내면적으로는 호불호가 뚜렷해 스스로도 모르게 ‘이건 싫어!’라며 냉정해질 때가 있지요. 직업적으로는 관리직, 매니저, 자산관리, 보험, 항공·유통·무역 등 ‘중개와 연결’ 역할을 잘해낼 수 있고, 7번 전차와 연관되어 해외·운송 관련 업에도 두각을 보입니다. 재물은 한 단계씩 서서히 쌓이는 패턴이라 조급함만 버리면 차근차근 커질 것입니다. 애정 면에서는 이성과 감정의 밸런스를 잘 맞추고 헌신적인 사랑을 해주어 관계에서 신뢰를 얻기 쉽습니다. 그러나 스스로 지나친 욕심을 부리거나 여러 곳에 에너지를 분산하면 정체가 길어질 수 있으니, 무언가를 더하려 할 때는 ‘나한테 지금 필요한 것인지’ 신중히 판단해야 합니다. 이 절제 사주는 긴 호흡으로 안정과 조화를 찾는 상징이며, ‘조금 부족해도 만족하는 마음’이 행복과 발전의 열쇠가 됩니다.`,

  15: `15번 악마(The Devil):
악마 카드는 ‘물질적 욕망, 유혹, 중독, 어두운 면’을 상징하며, 사주풀이에서 이 값이 나오면 언변이 좋고 호탕하지만, 변덕스럽고 탐욕적 면이 있을 수 있습니다. 대인관계에서 즉흥적이고 솔직한 매력으로 사람을 끌지만, 동시에 사기나 폭력적 태도로 상대를 힘들게 할 위험도 존재합니다. 재물은 한때 크게 벌 수 있으나, 불법이나 위험한 일로 연결되어 손실을 볼 수도 있으므로 윤리와 양심을 지키는 태도가 중요합니다. 연애나 애정에서는 가벼운 만남이나 숨겨진 관계가 생길 확률이 높고, 한 번 빠지면 헤어나오기 어려운 매혹과 집착의 이중성을 보입니다. 시험·학업은 불안정한 마음 때문에 집중이 잘 안 되고, 주변에서 방해가 있을 수도 있어, 더 높은 자제력과 계획이 필요합니다. 이사나 이동 역시 시기적으로 여의치 않아, 안정감 없는 변화가 계속될 때가 있습니다. 결국 악마 사주는 ‘자신이 가진 욕망과 충동’을 얼마나 잘 통제하느냐가 인생 성패를 가르는 큰 요인이며, 외향적 매력을 좋은 방향으로 쓰면 번뜩이는 성과를 만들 수 있지만, 방종에 빠지면 파멸을 맛볼 수 있으니 주의해야 합니다.`,

  16: `16번 탑(The Tower):
가장 강력한 경고 카드로, 갑작스러운 붕괴, 충격, 계획의 파탄을 상징합니다. 16번 사주는 겉으론 야망이 크고 빠른 행동을 선호하지만, 내부적으로는 감정을 억제하지 못해 스스로 무너뜨리는 경우가 많습니다. 주변인들의 도움이 있어도 본인의 급한 성격과 욱하는 성향 때문에 예상치 못한 문제나 사고가 터질 수 있지요. 직업은 건설·리모델링·주식·게임·군사 분야 등 ‘창조와 파괴가 함께하는’ 업종에서 두각을 나타낼 수 있지만, 욕심이 지나치면 프로젝트가 무너져 처음부터 다시 시작해야 할 수 있습니다. 건강 면에서는 관절·부상·뇌진탕 등 갑작스런 사고를 조심해야 하고, 사업이나 재물도 ‘대박 아니면 쪽박’ 식으로 기복이 큽니다. 사랑도 별안간에 이별이나 관계 파탄을 맞을 수 있어, 애정운이 불안정한 편입니다. 하지만 이미 잘못 쌓인 탑을 무너뜨리는 건 ‘새 출발’을 위한 기회이기도 합니다. 오히려 과거의 방식이 틀렸다면 과감히 버리고 새롭게 쌓아올리는 것이 16번 탑 사주의 진정한 발전 포인트라 할 수 있습니다.`,

  17: `17번 별(The Star):
희망, 미래에 대한 믿음, 창조적 영감을 상징하는 카드입니다. 17번 사주는 대체로 낙관적이고 활발한 에너지를 갖고 있어, 힘든 상황에도 ‘언젠가는 잘될 것’이라는 희망을 잃지 않습니다. 그러나 심리적으로 취약할 때가 있어, 기대만큼 일이 안 풀리면 쉽게 우울해질 수 있기에 주의가 필요합니다. 예술·디자인·미용·연예·컨텐츠 등 창의력이 요구되는 분야에서 두각을 나타낼 수 있으며, ‘예쁜 것, 멋진 것’을 좋아하고 감각이 탁월합니다. 재물은 수입과 지출이 모두 빈번해 저축보다는 소비 성향이 강해 보이니 계획적으로 돈을 관리해야 합니다. 사랑에서는 지고지순한 면이 있으며, 임신·출산 등 좋은 소식이 함께 들어올 수도 있습니다. 시험·학업도 목표와 계획을 잘 세우면 기대 이상의 성적을 얻는 행운이 있을 수 있으나, 자만심이 커지면 실수로 이어질 수 있으니 주의해야 합니다. 결국 ‘별 사주’는 긍정적 이미지와 아이디어를 통해 큰 인생 반전을 만들 수 있지만, 변덕과 낙관만으로는 안 되므로 꾸준한 실천이 함께해야 꿈을 현실로 바꿀 수 있습니다.`,

  18: `18번 달(Moon):
달은 불안, 감정 기복, 불확실성, 숨겨진 적 등을 상징합니다. 18번 사주는 직관력이 뛰어나고 지식을 뽐내는 걸 좋아하지만, 변덕이 심하고 쉽게 우울해지거나 스스로를 의심하기도 합니다. 겉으로는 좋아 보여도 실제론 금전이나 인간관계에서 문제가 있을 수 있으며, 거짓말이나 의심으로 인해 구설수를 만들 위험도 높습니다. 투자를 하거나 돈을 빌려주는 일은 신중히 해야 하고, 큰 모험보다는 안정적 수입원을 택하는 편이 낫습니다. 사랑에서도 상대의 마음을 잘 몰라 애매모호하게 끝나기 쉽고, 변태적 성욕이나 양다리처럼 복잡한 스캔들에 휘말릴 수 있어 주의해야 합니다. 건강 면에서는 위장·공황·우울증 등 정신적·소화기적 문제에 유의하고, 생리주기 등 여성적 에너지도 영향이 큽니다. 시험·학업은 심리적 불안이 공부를 방해할 수 있으니, 적극적으로 마음을 다스리고 자기확신을 길러야 좋은 결과를 기대할 수 있습니다. 달 사주가 가진 ‘감성’과 ‘직관’을 잘 활용하면 예술·봉사·연구 분야에서 빛나지만, 불안과 의심을 적절히 억제하는 게 인생의 핵심 과제가 됩니다.`,

  19: `19번 태양(The Sun):
가장 긍정적인 에너지를 담은 카드로, 활발하고 개방적이며, 미래에 대한 확신을 가진 성격을 상징합니다. 19번 사주는 무언가를 시작하면 주변까지 밝게 만드는 낙관주의자로, 대인관계가 원만하고 창의력도 풍부합니다. 반면 인기가 많은 만큼 시기를 받을 수도 있고, 직설적인 언행으로 주위를 피곤하게 만들 때가 있으니 주의가 필요합니다. 재물운도 좋아 횡재수나 상속 등으로 예상치 못한 부를 얻게 될 수도 있으나, 소소하게 도전해야 안전하며, 지나친 도박성 투자는 지양해야 합니다. 직업적으로 아이들과 관련된 교육사업, 광고나 마케팅, 스포츠, 여름 관련 업 등에서 두각을 나타낼 수 있고, 예술 창작 분야에서도 강렬한 색채나 유머를 선보이기 좋습니다. 사랑에서도 순탄하며 결혼을 하면 결실이 풍성할 확률이 높으나, 가끔 감정 과잉으로 실수를 저지를 수 있습니다. 시험·학업은 노력을 배신하지 않으니 준비한 만큼 좋은 성적을 얻기 쉽습니다. 태양 사주답게 모든 사안을 열정적으로 접근하지만, ‘타인의 시기나 소문’을 경계하고, 한 번씩은 스스로를 점검하는 겸손함이 필요합니다.`,

  20: `20번 심판(Judgement):
부활, 최후의 심판, 결정적 변화가 임박했음을 알리는 카드로, 사주풀이에서는 ‘이미 정해진 결과에 대한 결론’을 암시합니다. 한편, 과거 잘못이나 미련을 떨쳐내고 새로운 단계로 도약할 수도 있습니다. 의지가 강하고 말로 호감을 얻을 수 있는 커뮤니케이션 능력이 있지만, 이성과 감정 사이에서 갈팡질팡해 스스로 흔들릴 때도 있으니 주의가 필요합니다. 직업은 방송·공연·이벤트·음악·SNS·온라인 판매 등 대중을 상대로 한 활동에서 두각을 나타낼 수 있고, 고고학이나 역사연구처럼 ‘과거를 되짚어 미래를 도모하는’ 분야와도 맞습니다. 재물은 노력한 만큼 서서히 늘어나는 편이고, 현재 힘들어도 시간이 지나면 서서히 해결되는 흐름이 있습니다. 애정 면에서는 ‘한 번 헤어진 사람과 재회’하거나, 오랫동안 고생하다 결실을 보기도 하는 등 기복이 있을 수 있습니다. 시험·학업도 큰 욕심보다는 꾸준한 노력이 중요하며, 조급해하지 말고 자신감을 유지하면 좋은 결과가 있을 것입니다. 결국 심판 사주는 ‘스스로 내린 결론에 책임지고, 과거를 발판 삼아 새로운 길로 나아간다’는 메시지를 담고 있습니다.`,

  21: `21번 세계(The World):
모든 사이클의 완성과 새로운 시작을 겸하는 카드입니다. 사주풀이로 보면 한 분야에서 뛰어난 재능을 펼쳐 인정을 받고, 삶의 중요한 목표를 달성할 가능성이 큽니다. 동시에 또 다른 도전을 향해 나아가는 ‘끝이자 또 다른 시작’이 특징입니다. 여행이나 외국 문화를 좋아해 통역·무역·외교·항공 분야 등과 잘 어울리며, 예술·패션·스타일리스트 계열에서도 매력을 발휘할 수 있습니다. 재물 운은 순환이 원활하고, 주위 도움도 많이 받으므로 큰 어려움 없이 자산이 모일 수 있으나, 자신만의 시야가 강해 때로는 고집을 부려 기회를 놓칠 수도 있습니다. 애정 면에서는 매력적이고 완성된 사랑을 지향해, 이상적인 커플을 만들기 쉬우나, 스스로 ‘나는 이미 완전하다’는 인식 때문에 상대와의 소통이 부족하면 문제가 생길 수 있습니다. 시험·학업은 완벽주의가 발동하면 꾸준히 하다 마지막에 좋은 성적을 얻을 수 있습니다. 이 세계 사주는 ‘인생의 한 단계가 마무리되었고, 새로 펼쳐질 또 다른 무대가 준비된다’는 의미이므로, 본인 재능을 충분히 펼치면서도 자만하지 않는 자세가 중요합니다.`
};

const haeunCombos = {
  // ========== 9번 해운 세부 ==========
  "9/13": `9/13
- 알고 있는 변화에 대한 이득
- key) 변화, 새로운 시도, 결실.
- 새로운 변화에 대한 이득과 결과를 확인함.
- 준비한 것에 대한 결실을 맺는 한 해
: 진급/이사/투자 등 다음 해까지 이어질 수 있음(0/5).
`,
  "9/14": `9/14
- 소득은 없지만 당연한 이동
key)이동, 예견된, 자연스러운
- 자연스럽고 당연한 이동.
- 내정되어 있는 대로 가는 상황.
- 또 다른 내일을 계획하기 위한 이동.
- 새로운 일은 준비하지만 자연스러운 이동도 준비함(0/6).
`,
  "9/15": `9/15
- 호기심이 가득한 이동
key) 유혹, 도덕적/비도덕적 판단 x
- 호기심이 강한 한 해
- 한 가지로 구분하지 말 것.
- 헤어져도 붙잡으면 자기합리화하며 나쁜조건 제시
- 도덕, 비도덕 상관없이 본인 행동을 합리화
(유혹 흔들려도 당연한 이동으로 만들고 싶어함)(0/7)
`,
  "9/16": `9/16
- 쉬어가는 16
key) 구설수, 갑작스런 변화, 예기치 않은 사고
- 피할수 없는 변화 / 인력으로 막기 힘듦
- 계획 붕괴 / 준비되지 않은 변화
- 이사/투자/사건·사고 다발
- 감내하면 오히려 큰 기회(0/8)
`,

  // ========== 6번 해운 세부 ==========
  "6/10": `6/10
- 갈등의 연속이지만 내가 마음먹기에 달림
key)갈등, 선택장애, 인복, 순서
- 이러지도 저러지도 못하는 상황
- 올해 나의 기분 따라 행복·불행
- 갈등지속, 모든 일은 내 마음먹기에 달림
- 실리적 선택 위해 주변 협력 필요
`,
  "6/11": `6/11
- 선택장애의 결과(소득 보단 소비多)
key)결과, 결정
- 결정을 하게 됨
- 확실한 결정에 따른 결과 기다리는 시기
- 합법적 결정(결혼/이혼) → 서류 구체화
- 임신과 낙태
- 여성은 성형(시술/수술) 많이 함
`,
  "6/12": `6/12
- 과소비(감정, 돈, 시간)
key)힐링, 돈쓰는 재미, 고독, 배려, 헌신
- 힐링의 상반기 / 비워짐(이사,사업,연애)...
- 은밀 짝사랑, 혼자 감정상함
- 6월까지 금전 유출 / 무형자산 X, 유형자산에 돈쓰길
- 투자도 확실한 곳에
`,
  "6/13": `6/13
- 인간관계 바뀌는 시기
key)사람, 새로운 시작, 환경변동
- 이사/이동
- 주체가 본인일수도 타인일수도
- 누구 때문에 혹은 덕분에
`,

  // ========== 7번 해운 세부 ==========
  "7/11": `7/11
- 결정을 하는 한해
key)2ch, 아슬아슬, 문서, 자동차, 병원
- 새 시도·개척일 결정(아슬아슬)
- 직장다니며 법인 차리기(예 부동산)
- 사람 나가고 들어오고
- 끊어내고 2가지 이상 새 시작
- 자동차 교체·정비
- 병원 방문 잦음
`,
  "7/12": `7/12
- 더 높은 곳 올라가기 위해 한걸음 물러남
key)보상, 2가지 결과, 변화, 채워짐(+=-)
- 행동·인내 보상
- 2가지 이상의 약속된 결과
- 금전운은 쓰면 채워짐
- 자동차 변화(교체·면허취득/박탈)
- 7월까지 묶이고 풀림
`,
  "7/13": `7/13
- 확장의 기회
key)터닝포인트, 새로운 시작, 기회
- 1가지 일→2~3개로 확장 
- ex 영어학원→영수학원/새 시스템
- 본업 그대로 다른 일도 시작
- 힘들었던 사람은 족쇄 벗어남(파산,이혼,관재수등)
`,
  "7/14": `7/14
- 마음이 원활한 교류
key)조화, 통합, 질서준수, 자동차 사고수
- 당연한 이동
- 예상 못한 좋은 결과(자동차사고 과실적음)
- 좋은 결과 기대
- 전해 좋은 움직임→성공적 결과
`,

  // ========== 8번 해운 세부 ==========
  "8/12": `8/12
- 나의 이미지를 만들 수 없음
key)시련,인고,인내,고생,변화
- 시련 시기, 인고 고통
- 사서 고생, 변화를 기다리는 시간
- 해보지 않은 일 시작
- 애벌레→나비 과정
- 한걸음 뒤로
`,
  "8/13": `8/13
- 나의 이미지를 만들 수 있음
key)변화,새로운시작,새전환
- 피할수없는변화
: 좋았던사람 힘들/힘들었던사람 좋아짐
- 옛 자아버림/모든포기→새것옴
- 큰 터닝포인트
`,
  "8/14": `8/14
- 평행상태유지
key)견딤,인내
- 시작했으나 체감x(기대치)
- 남문제 해결 가능, 내문제는 해결x
- 차사고 내가 낼수도
- 주변서 발목잡을 일
`,
  "8/15": `8/15
- 쇠사슬에 묶임
key)관재수, 망신수, 구설
- 삼각관계,집착,불통
- 전신마취 수술 가능성
- 사기 당/치거나!!!
- 주변 상황 경계 
`,

  // ========== 3번 해운 세부 ==========
  "3/8": `3/8
- 좋은 일 들어오나 본인은 못 느낌
key)결과, 성공, 지침, 체감
- 좋은결과 있지만 체감못함
- 9월 이후 확인
- 과도한 일에 지침
- 일 많으나 본인 만족도↓
`,
  "3/9": `3/9
- 작년 힘듦 보상
key)결과,기대,변화
- 9월 이후 확인
- 준비→결과도 좋음
- 사주 '3,10' 있으면 흐름 늦어질 수도
- 좋은변화 시기
`,
  "3/10": `3/10
- 감정변동만큼 성공폭 큼
key)우연,의지,호사다마
- 모든성공=본인하기나름
- 우연히 좋은 일
- 자신믿고 끝까지 실행해야
- 불행중다행
- 말행동 일치→잘 풀림
`,
  "3/11": `3/11
- 결과물 구체화
key)결과,결정,판단,문서,자동차
- 문서운 한해
- 임신(제왕절개), 이혼(본의)
- 모든 결과물 구체화
- 결정 미룬것 해운 믿고 시도
- 자동차 사고도 이득 동반
`,

  // ========== 4번 해운 세부 ==========
  "4/9": `4/9
- 내가 생각,내가 실천
key)내가 주체, 변동, 실리추구
- 4월부터, 9월이후 확인
- 누구 땜x→내 주관적 생각 이동
- 철저준비 실행이 관건
- 열정적 시즌, 실리변화 
- 스트레스주의
`,
  "4/10": `4/10
- 과유불급
key)열정, 체감, 느림미학
- 움직이거나 가만히
- 많이 움직이면 감정폭도 큼
- 과하면 오히려x
`,
  "4/11": `4/11
- 본인 판단 중요
key)내주체, 판단
- 주도적 판단(다 내탓..)
- 4월부터
- 차사고 본인책임多
`,
  "4/12": `4/12
- 변화 시기, 힘들어도 열정으로 극복
key)내주체, 극복, 풀림
- 4월이후 풀림
- 벗어나려는 의지만 있으면 시련 이겨내고 진행
- 더높은 곳 위해 싸워서 쟁취
`,

  // ========== 5번 해운 세부 ==========
  "5/10": `5/10
- 주도하므로 모든일은 내맘먹기에 달림
key)인복,감정,도움받음,5월~
- 귀인 도움→불행중다행
- 내가 주도면 나를 믿고 나아감
- 혼자결정x 주변도움 필요
- 금전손실 적음(들어옴 많음)
- 실천우선
`,
  "5/11": `5/11
- 내가 판단하기 어려울 수도
key)이미지,감정소모,간섭,눌림
- 제휴·동맹
- 어제적->오늘동지/ 오늘동지->내일적
- 내행동결과 보는 시기
- 제한있지만 계획 추진가능
- 좋은일,나쁜일=남탓
`,
  "5/12": `5/12
- 실천하고 싶어도 힘듦
key)묶임,우유부단,융통성
- 사서고생,매너리즘,무기력
- 실패두려워 움직이지x
`,
  "5/13": `5/13
- 누군가와 함께 새시작
key)새로운시작,귀인,5월~
- 귀인도와 새출발
- 소득=실천필수
- 시시비비 가리는 시기지만 좋은방향
- 주도하되 타인말 경청→긍정
`,

  // ========== 0번 해운 세부 ==========
  "0/5": `0/5
- 인간관계변화,새로운시작단계
key)주도적,실천,충신/간신
- 목표있다면 주도→좋은결과
- 작은 실천=1년새 좋은결실
- 사람으로 상처有(귀인 or 간신)
- 문제→주위사람과 협력필요
- 사주 '5'면 실천력↑
`,
  "0/6": `0/6
- 환경뒤바뀜(실체x)
key)선택장애(순서),과소비,갈등
- 갈등연속(문제해결순서x)
- 소득<소비
- 귀인 들어오거나 나가거나
- 비워야 채워짐
- 실리추구하려 노력
`,
  "0/7": `0/7
- 보상,굴레벗어남,2가지성공
key)목적있는이동(자/타),빠른결과
- 성과바로
- 결단후 확실목표
- 2가지 일 결과동시
- 조직내 타동적이동→승진유력
- 좋은해운
`,
  "0/8": `0/8
- 느림의미학(실체x)
key)체감,조급,기대치(욕심)
- 마음조급,답답
- 무엇해야할지 모름
- 느리게 진행 체감
- 나쁘진x 좋아도x (소득x)
`,

  // ========== 1번 해운 세부 ==========
  "1/6": `1/6
- 환경 호전(실체o)
key)힐링,인복,목적의식
- 좋은사람연속
- 실체있음(남음)
- 당당한 삼각관계(양다리)
- 소비<소득
- 비우면채워짐, 공격투자가능
`,
  "1/7": `1/7
- 좋은 이동·결과연속
key)2가지이상성공,결정
- 자의든타의든 좋은일2개↑
- 타동이동→진급
- 일도2개동시
- 올해할일내년미루지말기
`,
  "1/8": `1/8
- 결과좋지만늦음
key)느림미학,체감,기대치,9월
- 좋은일들어오나 체감↓
- 결과늦음
- 욕심땜 만족x
- 양보할일생김
`,
  "1/9": `1/9
- 예견된변화,예견된미래
key)변화,이동,9월(best)
- 이유있는이동
- 당연한이동
- 자연스러운이동
- 9/14동급
ex 군입대,학년이동,입주 등
`,

  // ========== 2번 해운 세부 ==========
  "2/7": `2/7
- 준비된이동(상/하반기)
key)눌림,보상,2가지일,예견이동
- 타동이동有
- 뜻대로x 상처有,대신 보상有
- 준비시2월(상반기)
- 미준비시7월이후(하반기)
- 길보여도 안감
`,
  "2/8": `2/8
- 내년도약준비(3/9)
key)이미지,감정소모,간섭,놀림
- 힘들어도 표현x
- 주위or본인가슴아픈일
- 스스로운을막음(쌓인이미지망가짐)
- 8월이후도 놀림체감
- 자기케어시간
`,
  "2/9": `2/9
- 원치않는이동
key)내생각과다른결과,내년기대
- 인사이동/군대/예견x내이동
- 원치않는사람들어옴
- 원치않는임신(그리고이별)
- 장남/장녀 해운과부모님아픈가족해운같다면 사별가능
`,
  "2/10": `2/10
- 조건있는상황
key)조건,간섭,내욕심,감정기록
- 운은왔지만맘먹기달림
- 결론x조건계속
- 2/8과유사
- 감정기복큼
- 내기대치·마음을 재정비
`
};

// 예시 nameMap 일부
const nameMap = {
   "은": 2, "민":3, "임":9, "노":3, "모":3, "삼":3, "묵":3,
  "문":3, "미":3, "누":3, "흠":3, "움":3, "점":3,
  "무":3, "겸":3, "림":3, "매":8, "맹":3,
  "나":3, "남":3, "마":3, "명":3, "목":3,
  "김":3, "금":3, "막":8, "봄":3, "내":3,

  "석":4,"로":4,"학":4,"슬":4,
  "라":4,"종":18,"루":4,"일":4,
  "식":4,"래":4,"례":4,"록":4,
  "소":4,"리":4,"말":8,"란":4,
  "숙":4,"근":4,"솔":8,"순":4,

  "태":13,"택":12,"규":11,"분":5,"돔":5,"던":5,"만":3,"엽":5,"평":5,"효":5,
  "훈":5,"도":5,"봄":3,"다":5,"둔":5,"령":5,"봉":5,"탁":5,"탄":5,
  "대":5,"덕":5,"보":5,"단":5,"득":5,"련":10,"운":5,"편":5,"섭":5,
  "복":8,"ㄷ":5,"필":11,"담":3,"듬":5,"렴":5,"엄":5,"표":5,"포":5,
  "돈":5,"두":5,"갑":5,"당":5,"딘":5,"후":5,"욱":5,"팽":5,

  "정":9,

  "최":7,"동":7,"차":7,
  "추":7,"건":7,
  "채":7,"화":7,"좌":7,
  "찬":7,"하":7,
  "준":7,

  "박":8,"가":8,"람":4,"혜":8,"늘":8,"호":8,"해":8,"예":8,
  "중":8,"궁":8,"룡":8,"술":8,"곽":8,"계":8,"옹":8,"혁":8,
  "강":8,"율":8,"용":8,"송":8,"응":8,"사":8,"병":8,"열":8,
  "비":8,"군":8,"바":8,"야":8,"육":8,"방":8,"빙":8,"곡":8,
  "양":8,"백":8,"승":8,"옥":8,"을":8,"상":8,"오":8,"흥":8,
  "거":8,"늠":8,"반":8,"억":8,"남궁":8,"함":8,"독고":8,"렬":8,
  "권":8,"형":8,"영":8,"범":8,"고":8,"배":8,"랑":8,"빛":8,
  "결":8,"항":9,"밤":8,"부":8,"감":8,"궉":8,"관":8,
  "익":8,"구":8,"애":8,"광":8,"국":8,"웅":8,"아":8,"황":8,
  "공":8,"름":8,"산":8,"왕":8,"황보":8,"사공":8,"동방":8,

  "순":9,"정":9,"성":9,"이":9,"서":9,"선":9,"여":9,"녀":9,"존":9,"회":9,"선우":9,
  "지":9,"향":9,"장":9,"제":9,"주":7,"철":7,"님":9,"제갈":9,"심":9,"서문":9,
  "수":7,"조":9,"재":9,"자":9,"기":9,"실":9,"찰":7,"어":9,"요":9,
  "희":9,"홍":9,"유":9,"우":9,"언":9,"귀":9,"춘":7,"설":9,
  "길":9,"행":9,"휴":9,"시":11,"헌":9,"낭":3,"잠":9,"허":9,"갈":9,

  "안":10,"연":9,"환":8,
  "윤":10,"인":8,"란":8,
  "원":10,"빈":8,"론":4,
  "완":8,"전":10,"온":10,
  "린":8,"한":10,"손":10,

  "현":11,"진":9,"경":11,"극":8,"신":11,"청":7,"피":5,"염":11,
  "키":11,"창":11,"간":18,"닷":5,"척":7,"타":5,"음":11,
  "천":11,"세":11,"감":18,"본":8,"션":9,"첨":3,"탐":5,"품":11,
  "위":11,"균":11,"견":3,"벼":8,"숀":9,"초":7,"파":5,"총":11,
  "의":8,"검":8,"곤":3,"변":18,"직":9,"카":7,"판":5,"휘":11
};

//====================================================
const firstValInterpret = {
  0:"0=새시작",1:"1=독립",2:"2=여사제",3:"3=여황제",4:"4=황제",
  5:"5=교황",6:"6=연인",7:"7=전차",8:"8=힘",9:"9=은둔자",
  10:"10=운명수",11:"11=정의",12:"12=매달림",13:"13=죽음",
  14:"14=절제",15:"15=악마",16:"16=붕괴",17:"17=별",18:"18=달",
  19:"19=태양",20:"20=심판",21:"21=세계"
};
const secondValInterpret = {
  0:"0=가능성",1:"1=독립",2:"2=갈등",3:"3=풍요",4:"4=기초",
  5:"5=교황",6:"6=인복",7:"7=전차",8:"8=인내",9:"9=고독",
  10:"10=기복",11:"11=정의",12:"12=정체",13:"13=변혁",
  14:"14=중용",15:"15=욕망",16:"16=붕괴",17:"17=희망",
  18:"18=감성",19:"19=낙천",20:"20=부활",21:"21=완성"
};

//====================================================
// (2) 헬퍼 함수들
//====================================================
function sumDigits(num){
  let s = String(num);
  let sum=0;
  for(let c of s){
    sum += parseInt(c,10);
  }
  return sum;
}

//----------------------
// 사주값 계산
//----------------------
function calcSajuValue(y,m,d){
  if(isNaN(y) || isNaN(m) || isNaN(d)) return null;
  let total = y+m+d;

  if(total < 2000){
    // 2000 이하의 합계 계산 (구방식 예시)
    let strYMD = String(total).padStart(4,"0");
    let front2 = parseInt(strYMD.substr(0,2),10);
    let back2  = parseInt(strYMD.substr(2,2),10);
    let sumFront = sumDigits(front2); 
    let sumBack  = sumDigits(back2); 
    let fv = sumBack; 
    let combine = String(sumFront)+String(sumBack);
    let sv = sumDigits(parseInt(combine,10));
    return { total: total, firstVal: fv, secondVal: sv };
  } else {
    // 2000 이상이면 뒤 2자리로 firstVal 결정, 전체 자릿수 합으로 secondVal
    let lastTwo = total % 100;
    let fv = (lastTwo>21)? (lastTwo % 10) : lastTwo;
    let sv = sumDigits(total);
    return { total: total, firstVal: fv, secondVal: sv };
  }
}

//----------------------
// 해운값 계산
//----------------------
function calcHaeunValue(refY, m, d){
  if(isNaN(refY)||isNaN(m)||isNaN(d)) return null;
  let total = refY+m+d;
  let lastTwo = total % 100;
  let fv = (lastTwo>21)? (lastTwo % 10) : lastTwo;
  let sv = sumDigits(total);
  return { total: total, firstVal: fv, secondVal: sv };
}

//----------------------
// 이름풀이
//----------------------
function getNameDetail(str){
  let arr=[];
  for(let ch of str){
    let v = nameMap[ch] || 0;
    arr.push({char:ch, val:v});
  }
  return arr;
}

//----------------------
// 표 생성 (사주/해운)
//----------------------
function makeSajuTable(tableId,res){
  let table = document.getElementById(tableId);
  let fvTxt = firstValInterpret[res.firstVal] || `(${res.firstVal})?`;
  let svTxt = secondValInterpret[res.secondVal]|| `(${res.secondVal})?`;
  table.innerHTML=`
  <thead>
    <tr>
      <th>합계</th>
      <th>첫값</th>
      <th>첫값해석</th>
      <th>둘값</th>
      <th>둘값해석</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${res.total}</td>
      <td class="red">${res.firstVal}</td>
      <td>${fvTxt}</td>
      <td class="red">${res.secondVal}</td>
      <td>${svTxt}</td>
    </tr>
  </tbody>
  `;
}

//----------------------
// 해운 해석
//----------------------
function makeHaeunInterpret(firstVal, secondVal){
  let combo = `${firstVal}/${secondVal}`;
  if(haeunCombos.hasOwnProperty(combo)){
    return haeunCombos[combo];
  } else {
    return `(등록 없음) ${combo}`;
  }
}

//----------------------
// 이름풀이 표
//----------------------
function makeNameTable(tblId, arr){
  let tbl = document.getElementById(tblId);
  let rows = "";
  for(let obj of arr){
    let fv = firstValInterpret[obj.val] || `(${obj.val})?`;
    let detail = tarotData[obj.val] || "해석이 등록되지 않음";

    rows += `
    <tr>
      <td>${obj.char}</td>
      <td class="red">${obj.val}</td>
      <td>${fv}</td>
      <td class="interpret-text">${detail}</td>
    </tr>`;
  }
  tbl.innerHTML=`
  <thead>
    <tr>
      <th>글자</th><th>숫자</th><th>간단해석</th><th>자세한해석</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>`;
}

//====================================================
// (3) "calculateAll()" 함수 - 전역
//====================================================
function calculateAll(){
  // 1) 값 읽기
  let sy = parseInt(document.getElementById("solarYear").value);
  let sm = parseInt(document.getElementById("solarMonth").value);
  let sd = parseInt(document.getElementById("solarDay").value);

  let ly = parseInt(document.getElementById("lunarYear").value);
  let lm = parseInt(document.getElementById("lunarMonth").value);
  let ld = parseInt(document.getElementById("lunarDay").value);

  let hae = parseInt(document.getElementById("haeunYear").value);
  let uname = document.getElementById("userName").value.trim();

  // 결과영역 show
  document.getElementById("resultSection").style.display="block";

  // 2) 사주(양력)
  let solarRes = calcSajuValue(sy, sm, sd);
  if(solarRes){
    document.getElementById("solarSajuDiv").style.display="";
    makeSajuTable("solarSajuTable", solarRes);
    // 첫값 해석
    if(tarotData.hasOwnProperty(solarRes.firstVal)){
      document.getElementById("solarInterpretBoxFirst").style.display="";
      document.getElementById("solarInterpretTextFirst").textContent = tarotData[solarRes.firstVal];
    } else {
      document.getElementById("solarInterpretBoxFirst").style.display="none";
    }
    // 둘값 해석
    if(tarotData.hasOwnProperty(solarRes.secondVal)){
      document.getElementById("solarInterpretBoxSecond").style.display="";
      document.getElementById("solarInterpretTextSecond").textContent = tarotData[solarRes.secondVal];
    } else {
      document.getElementById("solarInterpretBoxSecond").style.display="none";
    }
  } else {
    document.getElementById("solarSajuDiv").style.display="none";
  }

  // 3) 사주(음력)
  let lunarRes = calcSajuValue(ly, lm, ld);
  if(lunarRes){
    document.getElementById("lunarSajuDiv").style.display="";
    makeSajuTable("lunarSajuTable", lunarRes);
    // 첫값 해석
    if(tarotData.hasOwnProperty(lunarRes.firstVal)){
      document.getElementById("lunarInterpretBoxFirst").style.display="";
      document.getElementById("lunarInterpretTextFirst").textContent = tarotData[lunarRes.firstVal];
    } else {
      document.getElementById("lunarInterpretBoxFirst").style.display="none";
    }
    // 둘값 해석
    if(tarotData.hasOwnProperty(lunarRes.secondVal)){
      document.getElementById("lunarInterpretBoxSecond").style.display="";
      document.getElementById("lunarInterpretTextSecond").textContent = tarotData[lunarRes.secondVal];
    } else {
      document.getElementById("lunarInterpretBoxSecond").style.display="none";
    }
  } else {
    document.getElementById("lunarSajuDiv").style.display="none";
  }

  // 4) 해운(양력)
  let solarH = calcHaeunValue(hae, sm, sd);
  if(solarH){
    document.getElementById("solarHaeunDiv").style.display="";
    makeSajuTable("solarHaeunTable", solarH);

    // 해운 해석 (양력)
    let interpret = makeHaeunInterpret(solarH.firstVal, solarH.secondVal);
    let sBox = document.getElementById("solarHaeunInterpretBox");
    let sTxt = document.getElementById("solarHaeunInterpretText");
    sBox.style.display = interpret.startsWith("(등록 없음)") ? "none" : "";
    sTxt.textContent = interpret;
  } else {
    document.getElementById("solarHaeunDiv").style.display="none";
  }

  // 5) 해운(음력)
  let lunarH = calcHaeunValue(hae, lm, ld);
  if(lunarH){
    document.getElementById("lunarHaeunDiv").style.display="";
    makeSajuTable("lunarHaeunTable", lunarH);

    // 해운 해석 (음력)
    let interpret = makeHaeunInterpret(lunarH.firstVal, lunarH.secondVal);
    let lBox = document.getElementById("lunarHaeunInterpretBox");
    let lTxt = document.getElementById("lunarHaeunInterpretText");
    lBox.style.display = interpret.startsWith("(등록 없음)") ? "none" : "";
    lTxt.textContent = interpret;
  } else {
    document.getElementById("lunarHaeunDiv").style.display="none";
  }

  // 6) 이름풀이
  if(uname.length>0){
    let ndetail = getNameDetail(uname);
    if(ndetail.length>0){
      document.getElementById("nameDiv").style.display="";
      makeNameTable("nameTable", ndetail);
    } else {
      document.getElementById("nameDiv").style.display="none";
    }
  } else {
    document.getElementById("nameDiv").style.display="none";
  }
}

//============================
// JS 코드 전역 정의 끝
//============================
