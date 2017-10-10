Lists
------
Create simple lists, great looking lists with just a few config files. Also easily customizable.

![](http://g.recordit.co/AI5TJJvcMb.gif)

### Quick Dev Start
* `nvm use` if using [NVM](https://github.com/creationix/nvm) to select the correct version of Node
* `npm install -g babel babel-cli`
* `npm install`
* `npm start`

#### Brand Data
Brand data can be found in the `app/data/brand.js` file and will look as follows:

Basic color scheming is the only customization available as of now, with plans to customize animation styles, typography, and margins / paddings.

```
export const brand = {
  logo: 'false',
  title: 'How to build a static list just like this very one.',
  description: `Here we will go through the steps needed to configure, build, and host a list just like this one all on your own.`,
  backgroundColor: '#FAFAFA',
  modalAccentColor: '#A2A2A2',
  loaderColor: '#666564',
  titleColor: '#1A1919',
  descriptionColor: '#1A1919',
  buttonColor: '#DA3610',
  buttonIconColor: '#FAFAFA',
  footerColor: '#FAFAFA'
}
```

#### List Items
List items can be found in the `app/data/items.js` file and will look as follows:

The `title` string will be the title of each one of your list items.

The `slug` key is currently not being used but will need to be unique as it will hash the url to feature direct list item linking.

`short` and `long` are descriptions. `short` is shown from the list views and both are shown on the items detail view.

Each item can have an unlimited number of `examples`. Here the examples have a `title`, `description`, and `code` snippet however, down the line there will be templates to choose example types from. 

```
export const items = [
  {
    title: 'String',
    slug: 'unique-name',
    short: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    long: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
    examples: [
      {
        title: 'Example 1',
        description: 'Example 1 description',
        code: `
        function isBigEnough(element) {
          return element >= 15;
        }

        [12, 5, 8, 130, 44].find(isBigEnough); // 130`
      },
      {
        title: 'Example 2',
        description: 'Example 2 description',
        code: `
        function isBigEnough(element) {
          return element >= 15;
        }

        [12, 5, 8, 130, 44].find(isBigEnough); // 130`
      },
      ...etc
    ]
  },
  ...etc
 ]
 ```
