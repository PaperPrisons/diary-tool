# Paper Prisons Initiative Diary Tool

The Diary Tool is an animated widget that showcases testimonials from individuals impacted by the criminal justice system, fostering empathy and compassion. See our tool at [paperprisons.org/diary.html](https://www.paperprisons.org/diary.html), which provides responses to the questions: what has been the impact of a criminal record, what has been the impact of an expungement of a criminal record, on your life. Once you collect the data, you can customize the views to reflect various demographics, enabling you to better advocate for your target population. If you're unsure whether the Diary Tool is suitable for your organization, please refer to our [presentation](https://docs.google.com/presentation/d/e/2PACX-1vSUQxSEoaSosCPHbwN8Oeun-2hIiYJA1kOjmC4bzUyCtbPHllWpwjMrmzLQy9xdFteCF9PbqBxcSu8M/pub?start=false&loop=false&delayms=3000), which explains the first few steps of evaluating the tool and then collecting the responses.

Once you’ve collected narratives to elevate, you can follow the steps to create a Diary Tool for your website.

## Integrating the tool

Follow these steps to integrate the Diary Tool into your website:

1. Clone the `diary.html` file, `css/`, `js/`, and `build/` folders into your website's directory.
2. Create a copy of your spreadsheet containing quotes for the diary and testimony. Follow the instructions in the [Creating your own spreadsheet](README.md#creating-your-own-spreadsheet) section of this README.
3. Replace the links in the `script.js` file with the links to your newly created spreadsheets. The `script.js` file can be found in the `js/` directory.
4. Link the `diary.html` file from your website. You can do this by adding a link to `diary.html` in your website's navigation menu or wherever you find it appropriate.
5. Ensure that the stylesheets and scripts are correctly linked in your HTML files. The `diary.html` file should have links to the CSS files in the `css/` and `build/css/` directories, and to the JavaScript file in the `js/` directory.

That's it! You have successfully integrated the Diary Tool into your website.

## Creating your own spreadsheet

1. When integrating this tool, make sure to create your own spreadsheets similar to ones linked below.
2. Once the you create the spreadsheet you need get a publishable CSV link.
   - Go to you spreadsheet, click of `File -> Share -> Publish to Web`
   - Select "Entire Sheet" and format as "CSV"
   - Copy the link to published CSV
3. Replace the links in `script.js`

## Links to sample spreadsheets

- [Impact of Expugemnet Quotes](https://docs.google.com/spreadsheets/d/1vZuEXFWs6IZxtkYXPe5M0gaVITSw0kfWYyjci9bBHyc/edit?usp=sharing)

- [Impact of Having a Record Quotes](https://docs.google.com/spreadsheets/d/1OPGJUwvGkFnKzUQNTBetU0BWKv0ViShp6gRep58yG5k/edit?usp=sharing)

## For queries/feedback
- [vgujarathi@scu.edu](vgujarathi@scu.edu)
- [cchien@berkley.edu](cchien@berkley.edu)
