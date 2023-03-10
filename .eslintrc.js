/**
 * @name: .eslintc.js
 * @description: "자바스크립트 문법"을 검토해주는 도구
 * @version: 2.0
 */
module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	/**
	 * @description : 작업규칙
	 * false(0)
	 * warn(1)
	 * error(2)
	 */
	rules: {
		/**
		 * @description: React-Hook Rules
		 */
		'react-hooks/rules-of-hooks': 'off',

		// useEffect return 관련 체크
		'react-hooks/exhaustive-deps': 'off',
		// prop의 타입과 관련된 체크
		'react/prop-types': 'off',

		/**
		 * @description: React Rules
		 */
		indent: ['off'],

		// 불필요한 이스케이프 문자를 허용하지 않음
		'no-useless-escape': 'warn',

		// 사용하지 않는 변수
		'no-unused-vars': 'warn',

		// 빈 블록문은 허용하지 않음
		'no-empty': 'warn',

		// `return`, `throw`, `continue` 및 `break` 문 뒤에 도달할 수 없는 코드를 허용하지 않습니다.
		'no-unreachable': 'warn',

		// case 절내에서 변수 선언 허용여부
		'no-case-declarations': 'warn',

		'react/no-unescaped-entities': 'off',

		/**
		 * @description: AirBnb Style
		 */
		'react/prefer-stateless-function': 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-one-expression-per-line': 'off',
	},
};
