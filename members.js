function skillsMember(){
    return{
        restrict: 'E',
        renokateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member:'='
        }
    };
}