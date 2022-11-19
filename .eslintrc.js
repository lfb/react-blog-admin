module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['airbnb', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ['react'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        "no-param-reassign": 0, // 关闭该属性校验
        "no-shadow": ["error", { "allow": ["state"] }],
        "import/prefer-default-export": "off",
        'react/prefer-stateless-function': 0, // 关闭react默认的props-type验证
        'react/prop-types': [0],
        'react/jsx-closing-bracket-location': 'off',
        'consistent-return': 'off',
        // 关闭使用解构赋值的检测
        'react/destructuring-assignment': [0, 'always'],
        // 解决require报错问题
        'import/no-extraneous-dependencies': ["error", { devDependencies: true }],
        'react/jsx-wrap-multilines': 'off',
        "prefer-object-spread": 'off',
        "no-unused-vars": 0,
        "react/jsx-props-no-spreading": 0,
        "no-plusplus": 0,
        "react/no-danger": 0
    }
};
