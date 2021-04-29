import React from "react";
import Layout from "../../components/Layout";
import classes from "./articleContent.module.css";

const ArticleContent = () => {
  return (
    <Layout>
      <div className={classes.section}>
        <h2>Welcome John</h2>
        <h4>What du you like to do?</h4>
        <div className={classes.contentBox}>
          <div className={classes.contentBoxTitle}>
            <h3>Content Box</h3>
            <div className={classes.contentBoxForm}>
              <span className={classes.contentBoxTitleTable}>Table</span>
              <span className={classes.contentBoxTitleForms}>Forms</span>
            </div>
          </div>
          <div className={classes.contentBoxContent}>
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                  <th>Column 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lorem, ipsum dolor.</td>
                  <td>$100</td>
                  <td>Lorem, ipsum dolor.</td>
                  <td>Lorem ipsum.</td>
                  <td>Lorem ipsum.</td>
                </tr>
                <tr>
                  <td>February</td>
                  <td>$80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleContent;
