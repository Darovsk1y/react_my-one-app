(this["webpackJsonpmy-one-app"]=this["webpackJsonpmy-one-app"]||[]).push([[4],{223:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return c}));var a=function(e){if(!e)return"field is required"},c=function(e){return function(t){return t.length>e?"Max lenght message is ".concat(e," simbols"):void 0}}},224:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var a=s(3),c=s(233),n=s(225),r=s.n(n),i=s(1),o=["input","meta"],l=function(e){return function(t){var s=t.input,n=t.meta,l=Object(c.a)(t,o),j=n.touched&&n.error;return Object(i.jsxs)("div",{className:r.a.controls+" "+(j?r.a.error:""),children:[Object(i.jsx)(e,Object(a.a)(Object(a.a)({},l),s)),j&&Object(i.jsx)("div",{className:r.a.errMessage,children:n.error})]})}}},225:function(e,t,s){e.exports={controls:"FormControls_controls__p4CCh",error:"FormControls_error__sUN7x",errMessage:"FormControls_errMessage__2Pt9T"}},227:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var a=s(3),c=s(31),n=s(32),r=s(34),i=s(33),o=s(0),l=s.n(o),j=s(4),b=s(15),u=s(1),d=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var t=function(t){Object(r.a)(o,t);var s=Object(i.a)(o);function o(){return Object(c.a)(this,o),s.apply(this,arguments)}return Object(n.a)(o,[{key:"render",value:function(){return this.props.isAuth?Object(u.jsx)(e,Object(a.a)({},this.props)):Object(u.jsx)(j.a,{to:"/login"})}}]),o}(l.a.Component);return Object(b.b)(d)(t)}},234:function(e,t,s){e.exports={info:"UserInfo_info__c2A-i",line:"UserInfo_line__2MP7x",param:"UserInfo_param__3a9vc",param_name:"UserInfo_param_name__1y8w7",answer:"UserInfo_answer__2HAll",answer_name:"UserInfo_answer_name__3Giso",iconJob:"UserInfo_iconJob__1-GsI",status:"UserInfo_status__xRiKQ"}},235:function(e,t,s){e.exports={posts:"UserPosts_posts__2p8rN",new:"UserPosts_new__1FB1T",form:"UserPosts_form__qbMRJ",textarea:"UserPosts_textarea__YruvQ",btn:"UserPosts_btn__2icsz"}},250:function(e,t,s){e.exports={image:"MainImage_image__3u2z4"}},251:function(e,t,s){e.exports={body:"Profile_body__38odf"}},252:function(e,t,s){e.exports={avatar:"UserAvatar_avatar__2hCBR"}},253:function(e,t,s){e.exports={header:"UserHeader_header__1e1ih"}},254:function(e,t,s){e.exports={user:"User_user__1Qhtu",block:"User_block__m-PXE"}},255:function(e,t,s){e.exports={like:"Like_like__1Msuz",image:"Like_image__1VyJO"}},256:function(e,t,s){e.exports={post:"Post_post__1vPbH",row:"Post_row__k6tk0",block:"Post_block__3e-Lk",avatar:"Post_avatar__33K2K",name:"Post_name__1H9dT",text:"Post_text__1zuid"}},257:function(e,t,s){e.exports={posts:"PostsOld_posts__1q2eG"}},314:function(e,t,s){"use strict";s.r(t);var a=s(250),c=s.n(a),n=s(1),r=function(){return Object(n.jsx)("div",{className:c.a.image,children:Object(n.jsx)("img",{src:"https://i.imgur.com/Wt2zf01.png",alt:""})})},i=s(251),o=s.n(i),l=s(3),j=s(31),b=s(32),u=s(34),d=s(33),m=s(0),p=s.n(m),h=s(252),f=s.n(h),O=function(e){return Object(n.jsx)("a",{href:"$/",className:f.a.avatar,children:e.avatar?Object(n.jsx)("img",{src:e.avatar,alt:""}):Object(n.jsx)("img",{src:"https://i0.wp.com/slovami.net/wp-content/uploads/2018/04/1-36-1024x1024.jpg",alt:""})})},x=s(234),v=s.n(x),_=s(23),N=function(e){var t=Object(m.useState)(!1),s=Object(_.a)(t,2),a=s[0],c=s[1],r=Object(m.useState)(e.status),i=Object(_.a)(r,2),o=i[0],l=i[1];Object(m.useEffect)((function(){l(e.status)}),[e.status]);return Object(n.jsx)("div",{className:v.a.status,children:a?Object(n.jsx)("div",{children:Object(n.jsx)("input",{autoFocus:!0,onChange:function(e){l(e.currentTarget.value)},onBlur:function(){c(!1),e.updateStatusThusk(o)},value:o})}):Object(n.jsx)("div",{children:Object(n.jsx)("span",{onDoubleClick:function(){c(!0)},children:e.status||"----"})})})},k=function(e){return Object(n.jsxs)("div",{className:v.a.info,children:[Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param+" "+v.a.param_name,children:"name"}),Object(n.jsx)("div",{className:v.a.answer+" "+v.a.answer_name,children:e.profile.fullName})]}),Object(n.jsx)(N,Object(l.a)({},e)),Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"city"}),Object(n.jsx)("div",{className:v.a.answer,children:e.profile.city?e.profile.city:"Gotham City"})]}),e.profile.aboutMe?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"About Me"}),Object(n.jsx)("div",{className:v.a.answer,children:e.profile.aboutMe})]}):"",e.profile.contacts.facebook?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"facebook"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.facebook,children:e.profile.contacts.facebook})})]}):"",e.profile.contacts.website?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"website"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.website,children:e.profile.contacts.website})})]}):"",e.profile.contacts.vk?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"vk"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.vk,children:e.profile.contacts.vk})})]}):"",e.profile.contacts.twitter?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"twitter"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.twitter,children:e.profile.contacts.twitter})})]}):"",e.profile.contacts.instagram?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"instagram"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.instagram,children:e.profile.contacts.instagram})})]}):"",e.profile.contacts.youtube?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"youtube"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.youtube,children:e.profile.contacts.youtube})})]}):"",e.profile.contacts.github?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"github"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.github,children:e.profile.contacts.github})})]}):"",e.profile.contacts.mainLink?Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"mainLink"}),Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("a",{href:e.profile.contacts.mainLink,children:e.profile.contacts.mainLink})})]}):"",Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param,children:"Looking for a job"}),e.profile.lookingForAJob?Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("img",{src:"https://www.aura.ge/uploads/gantvirtva/didi_smailebi/samili.162.gif",alt:"",className:v.a.iconJob})}):Object(n.jsx)("div",{className:v.a.answer,children:Object(n.jsx)("img",{src:"https://www.aura.ge/uploads/gantvirtva/didi_smailebi/samili.161.gif",alt:"",className:v.a.iconJob})})]}),Object(n.jsxs)("div",{className:v.a.line,children:[Object(n.jsx)("div",{className:v.a.param}),Object(n.jsx)("div",{className:v.a.answer,children:e.profile.lookingForAJobDescription})]})]})},g=s(253),w=s.n(g),y=function(e){return Object(n.jsxs)("div",{className:w.a.header,children:[Object(n.jsx)(O,{avatar:e.profile.photos.large}),Object(n.jsx)(k,Object(l.a)({},e))]})},P=s(254),U=s.n(P),C=s(56),M=s(255),I=s.n(M),S=function(e){return Object(n.jsxs)("button",{type:"button",className:I.a.like,children:[Object(n.jsx)("span",{children:e.likes}),Object(n.jsx)("div",{className:I.a.image,children:Object(n.jsx)("img",{src:"https://pngicon.ru/file/uploads/like.png",alt:""})})]})},T=s(256),A=s.n(T),J=s(10),L=function(e){return Object(n.jsxs)("div",{className:A.a.post,children:[Object(n.jsxs)("div",{className:A.a.row,children:[Object(n.jsx)("div",{className:A.a.avatar,children:Object(n.jsx)(J.b,{to:e.link,children:Object(n.jsx)("img",{src:e.avatar,alt:""})})}),Object(n.jsxs)("div",{className:A.a.block,children:[Object(n.jsx)("div",{className:A.a.name,children:e.name}),Object(n.jsx)("div",{className:A.a.text,children:e.text})]})]}),Object(n.jsx)(S,{likes:e.likes})]})},F=s(257),z=s.n(F),G=function(e){var t=e.posts.map((function(e){return Object(n.jsx)(L,{likes:e.likes,name:e.name,avatar:e.avatar,text:e.text,link:e.link},e.id)}));return Object(n.jsx)("div",{className:z.a.posts,children:t})},H=s(235),q=s.n(H),B=s(102),D=s(223),K=s(224),Q=Object(K.a)("textarea"),R=Object(D.a)(10),E=function(e){return Object(n.jsxs)("form",{className:q.a.form,onSubmit:e.handleSubmit,children:[Object(n.jsx)(B.a,{component:Q,name:"textarea",className:q.a.textarea,validate:[D.b,R],placeholder:"add message"}),Object(n.jsx)("button",{className:q.a.btn,children:"Send"})]})},V=s(103),W=Object(V.a)({form:"post"})(E),X=function(e){return Object(n.jsxs)("div",{className:q.a.posts,children:["My Posts",Object(n.jsx)("div",{className:q.a.new,children:Object(n.jsx)(W,Object(l.a)(Object(l.a)({},e),{},{onSubmit:function(t){e.newPostActionCreator(t.textarea),t.textarea=""}}))}),Object(n.jsx)(G,{posts:e.posts})]})},Y=s(15),$=Object(Y.b)((function(e){return{posts:e.profile.posts}}),{newPostActionCreator:C.c})(X),Z=s(51),ee=function(e){return e.profile?Object(n.jsxs)("div",{className:U.a.user,children:[Object(n.jsx)(y,Object(l.a)({},e)),Object(n.jsx)("div",{className:U.a.block,children:Object(n.jsx)($,{})})]}):Object(n.jsx)(Z.a,{})},te=s(4),se=s(227),ae=s(28),ce=function(e){Object(u.a)(s,e);var t=Object(d.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match?this.props.match.params.userId:this.props.auth.id;this.props.getProfileThusk(e),this.props.setStatusThusk(e)}},{key:"render",value:function(){return Object(n.jsx)(ee,{profile:this.props.profile,updateStatusThusk:this.props.updateStatusThusk,status:this.props.status})}}]),s}(p.a.Component),ne=Object(ae.d)(Object(Y.b)((function(e){return{profile:e.profile.profile,auth:e.auth,status:e.profile.status}}),{getProfileThusk:C.b,setStatusThusk:C.d,updateStatusThusk:C.e}),se.a)((function(e){var t=Object(te.g)("/profile/:userId");return Object(n.jsx)(ce,Object(l.a)(Object(l.a)({},e),{},{match:t}))}));t.default=function(e){return Object(n.jsxs)("div",{className:o.a.main,children:[Object(n.jsx)(r,{}),Object(n.jsx)("div",{className:o.a.body,children:Object(n.jsx)(ne,{})})]})}}}]);
//# sourceMappingURL=4.4bbce0a0.chunk.js.map