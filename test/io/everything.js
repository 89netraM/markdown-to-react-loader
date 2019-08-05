import React, { Fragment } from "react";

const Markdown = () => (
  <Fragment>
    <h1 id="markdown-syntax">Markdown: Syntax</h1>
    <ul>
      <li>
        <a href="#overview">Overview</a>
        <ul>
          <li>
            <a href="#philosophy">Philosophy</a>
          </li>
          <li>
            <a href="#html">Inline HTML</a>
          </li>
          <li>
            <a href="#autoescape">Automatic Escaping for Special Characters</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#block">Block Elements</a>
        <ul>
          <li>
            <a href="#p">Paragraphs and Line Breaks</a>
          </li>
          <li>
            <a href="#header">Headers</a>
          </li>
          <li>
            <a href="#blockquote">Blockquotes</a>
          </li>
          <li>
            <a href="#list">Lists</a>
          </li>
          <li>
            <a href="#precode">Code Blocks</a>
          </li>
          <li>
            <a href="#hr">Horizontal Rules</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#span">Span Elements</a>
        <ul>
          <li>
            <a href="#link">Links</a>
          </li>
          <li>
            <a href="#em">Emphasis</a>
          </li>
          <li>
            <a href="#code">Code</a>
          </li>
          <li>
            <a href="#img">Images</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#misc">Miscellaneous</a>
        <ul>
          <li>
            <a href="#backslash">Backslash Escapes</a>
          </li>
          <li>
            <a href="#autolink">Automatic Links</a>
          </li>
        </ul>
      </li>
    </ul>
    <p>
      <strong>Note:</strong> This document is itself written using Markdown; you
      can{" "}
      <a href="/projects/markdown/syntax.text">
        see the source for it by adding &#39;.text&#39; to the URL
      </a>
      .
    </p>
    <hr />
    <h2 id="overview">Overview</h2>
    <h3 id="philosophy">Philosophy</h3>
    <p>
      Markdown is intended to be as easy-to-read and easy-to-write as is
      feasible.
    </p>
    <p>
      Readability, however, is emphasized above all else. A Markdown-formatted
      document should be publishable as-is, as plain text, without looking like
      it&#39;s been marked up with tags or formatting instructions. While
      Markdown&#39;s syntax has been influenced by several existing text-to-HTML
      filters -- including{" "}
      <a href="http://docutils.sourceforge.net/mirror/setext.html">Setext</a>,{" "}
      <a href="http://www.aaronsw.com/2002/atx/">atx</a>,{" "}
      <a href="http://textism.com/tools/textile/">Textile</a>,{" "}
      <a href="http://docutils.sourceforge.net/rst.html">reStructuredText</a>,
      <a href="http://www.triptico.com/software/grutatxt.html">Grutatext</a>,
      and <a href="http://ettext.taint.org/doc/">EtText</a> -- the single
      biggest source of inspiration for Markdown&#39;s syntax is the format of
      plain text email.
    </p>
    <h2 id="block-elements">Block Elements</h2>
    <h3 id="paragraphs-and-line-breaks">Paragraphs and Line Breaks</h3>
    <p>
      A paragraph is simply one or more consecutive lines of text, separated by
      one or more blank lines. &#40;A blank line is any line that looks like a
      blank line -- a line containing nothing but spaces or tabs is considered
      blank.&#41; Normal paragraphs should not be indented with spaces or tabs.
    </p>
    <p>
      The implication of the &quot;one or more consecutive lines of text&quot;
      rule is that Markdown supports &quot;hard-wrapped&quot; text paragraphs.
      This differs significantly from most other text-to-HTML formatters
      &#40;including Movable Type&#39;s &quot;Convert Line Breaks&quot;
      option&#41; which translate every line break character in a paragraph into
      a <code>&lt;br /&gt;</code> tag.
    </p>
    <p>
      When you <em>do</em> want to insert a <code>&lt;br /&gt;</code> break tag
      using Markdown, you end a line with two or more spaces, then type return.
    </p>
    <h3 id="headers">Headers</h3>
    <p>Markdown supports two styles of headers, [Setext] [1] and [atx] [2].</p>
    <p>
      Optionally, you may &quot;close&quot; atx-style headers. This is purely
      cosmetic -- you can use this if you think it looks better. The closing
      hashes don&#39;t even need to match the number of hashes used to open the
      header. &#40;The number of opening hashes determines the header
      level.&#41;
    </p>
    <h3 id="blockquotes">Blockquotes</h3>
    <p>
      Markdown uses email-style <code>&gt;</code> characters for blockquoting.
      If you&#39;re familiar with quoting passages of text in an email message,
      then you know how to create a blockquote in Markdown. It looks best if you
      hard wrap the text and put a <code>&gt;</code> before every line:
    </p>
    <blockquote>
      <p>
        This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
        Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
      </p>
      <p>
        Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
        sem consectetuer libero luctus adipiscing.
      </p>
    </blockquote>
    <p>
      Markdown allows you to be lazy and only put the <code>&gt;</code> before
      the first line of a hard-wrapped paragraph:
    </p>
    <blockquote>
      <p>
        This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
        Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
      </p>
    </blockquote>
    <blockquote>
      <p>
        Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
        sem consectetuer libero luctus adipiscing.
      </p>
    </blockquote>
    <p>
      Blockquotes can be nested &#40;i.e. a blockquote-in-a-blockquote&#41; by
      adding additional levels of <code>&gt;</code>:
    </p>
    <blockquote>
      <p>This is the first level of quoting.</p>
      <blockquote>
        <p>This is nested blockquote.</p>
      </blockquote>
      <p>Back to the first level.</p>
    </blockquote>
    <p>
      Blockquotes can contain other Markdown elements, including headers, lists,
      and code blocks:
    </p>
    <blockquote>
      <h2 id="this-is-a-header">This is a header.</h2>
      <ol>
        <li>This is the first list item.</li>
        <li>This is the second list item.</li>
      </ol>
      <p>Here&#39;s some example code:</p>

      <pre className="">
        <code className="">
          return shell_exec&#40;"echo $input | $markdown_script"&#41;;
        </code>
      </pre>
    </blockquote>
    <p>
      Any decent text editor should make email-style quoting easy. For example,
      with BBEdit, you can make a selection and choose Increase Quote Level from
      the Text menu.
    </p>
    <h3 id="lists">Lists</h3>
    <p>
      Markdown supports ordered &#40;numbered&#41; and unordered
      &#40;bulleted&#41; lists.
    </p>
    <p>
      Unordered lists use asterisks, pluses, and hyphens -- interchangably -- as
      list markers:
    </p>
    <ul>
      <li>Red</li>
      <li>Green</li>
      <li>Blue</li>
    </ul>
    <p>is equivalent to:</p>
    <ul>
      <li>Red</li>
      <li>Green</li>
      <li>Blue</li>
    </ul>
    <p>and:</p>
    <ul>
      <li>Red</li>
      <li>Green</li>
      <li>Blue</li>
    </ul>
    <p>Ordered lists use numbers followed by periods:</p>
    <ol>
      <li>Bird</li>
      <li>McHale</li>
      <li>Parish</li>
    </ol>
    <p>
      It&#39;s important to note that the actual numbers you use to mark the
      list have no effect on the HTML output Markdown produces. The HTML
      Markdown produces from the above list is:
    </p>
    <p>If you instead wrote the list in Markdown like this:</p>
    <ol>
      <li>Bird</li>
      <li>McHale</li>
      <li>Parish</li>
    </ol>
    <p>or even:</p>
    <ol start="3">
      <li>Bird</li>
      <li>McHale</li>
      <li>Parish</li>
    </ol>
    <p>
      you&#39;d get the exact same HTML output. The point is, if you want to,
      you can use ordinal numbers in your ordered Markdown lists, so that the
      numbers in your source match the numbers in your published HTML. But if
      you want to be lazy, you don&#39;t have to.
    </p>
    <p>To make lists look nice, you can wrap items with hanging indents:</p>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
        hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec,
        fringilla in, laoreet vitae, risus.
      </li>
      <li>
        Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
        sem consectetuer libero luctus adipiscing.
      </li>
    </ul>
    <p>But if you want to be lazy, you don&#39;t have to:</p>
    <ul>
      <li>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam
        hendrerit mi posuere lectus. Vestibulum enim wisi, viverra nec,
        fringilla in, laoreet vitae, risus.
      </li>
      <li>
        Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id
        sem consectetuer libero luctus adipiscing.
      </li>
    </ul>
    <p>
      List items may consist of multiple paragraphs. Each subsequent paragraph
      in a list item must be indented by either 4 spaces or one tab:
    </p>
    <ol>
      <li>
        <p>
          This is a list item with two paragraphs. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
        </p>
        <p>
          Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
          Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
        </p>
      </li>
      <li>
        <p>Suspendisse id sem consectetuer libero luctus adipiscing.</p>
      </li>
    </ol>
    <p>
      It looks nice if you indent every line of the subsequent paragraphs, but
      here again, Markdown will allow you to be lazy:
    </p>
    <ul>
      <li>
        <p>This is a list item with two paragraphs.</p>
        <p>
          This is the second paragraph in the list item. You&#39;re only
          required to indent the first line. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
        </p>
      </li>
      <li>
        <p>Another item in the same list.</p>
      </li>
    </ul>
    <p>
      To put a blockquote within a list item, the blockquote&#39;s{" "}
      <code>&gt;</code>
      delimiters need to be indented:
    </p>
    <ul>
      <li>
        <p>A list item with a blockquote:</p>
        <blockquote>
          <p>This is a blockquote inside a list item.</p>
        </blockquote>
      </li>
    </ul>
    <p>
      To put a code block within a list item, the code block needs to be
      indented <em>twice</em> -- 8 spaces or two tabs:
    </p>
    <ul>
      <li>
        <p>A list item with a code block:</p>

        <pre className="">
          <code className="">&lt;code goes here></code>
        </pre>
      </li>
    </ul>
    <h3 id="code-blocks">Code Blocks</h3>
    <p>
      Pre-formatted code blocks are used for writing about programming or markup
      source code. Rather than forming normal paragraphs, the lines of a code
      block are interpreted literally. Markdown wraps a code block in both{" "}
      <code>&lt;pre&gt;</code> and <code>&lt;code&gt;</code> tags.
    </p>
    <p>
      To produce a code block in Markdown, simply indent every line of the block
      by at least 4 spaces or 1 tab.
    </p>
    <p>This is a normal paragraph:</p>

    <pre className="">
      <code className="">This is a code block.</code>
    </pre>
    <p>Here is an example of AppleScript:</p>

    <pre className="">
      <code className="">
        tell application "Foo"
        <br /> beep
        <br />
        end tell
      </code>
    </pre>
    <p>
      A code block continues until it reaches a line that is not indented
      &#40;or the end of the article&#41;.
    </p>
    <p>
      Within a code block, ampersands &#40;<code>&amp;</code>&#41; and angle
      brackets &#40;<code>&lt;</code> and <code>&gt;</code>&#41; are
      automatically converted into HTML entities. This makes it very easy to
      include example HTML source code using Markdown -- just paste it and
      indent it, and Markdown will handle the hassle of encoding the ampersands
      and angle brackets. For example, this:
    </p>

    <pre className="">
      <code className="">
        &lt;div className="footer">
        <br /> &amp;copy; 2004 Foo Corporation
        <br />
        &lt;/div>
      </code>
    </pre>
    <p>
      Regular Markdown syntax is not processed within code blocks. E.g.,
      asterisks are just literal asterisks within a code block. This means
      it&#39;s also easy to use Markdown to write about Markdown&#39;s own
      syntax.
    </p>

    <pre className="">
      <code className="">
        tell application "Foo"
        <br /> beep
        <br />
        end tell
      </code>
    </pre>
    <h2 id="span-elements">Span Elements</h2>
    <h3 id="links">Links</h3>
    <p>
      Markdown supports two style of links: <em>inline</em> and{" "}
      <em>reference</em>.
    </p>
    <p>In both styles, the link text is delimited by [square brackets].</p>
    <p>
      To create an inline link, use a set of regular parentheses immediately
      after the link text&#39;s closing square bracket. Inside the parentheses,
      put the URL where you want the link to point, along with an{" "}
      <em>optional</em>
      title for the link, surrounded in quotes. For example:
    </p>
    <p>
      This is <a href="http://example.com/">an example</a> inline link.
    </p>
    <p>
      <a href="http://example.net/">This link</a> has no title attribute.
    </p>
    <h3 id="emphasis">Emphasis</h3>
    <p>
      Markdown treats asterisks &#40;<code>*</code>&#41; and underscores &#40;
      <code>_</code>&#41; as indicators of emphasis. Text wrapped with one{" "}
      <code>*</code> or <code>_</code> will be wrapped with an HTML{" "}
      <code>&lt;em&gt;</code> tag; double <code>*</code>&#39;s or <code>_</code>
      &#39;s will be wrapped with an HTML
      <code>&lt;strong&gt;</code> tag. E.g., this input:
    </p>
    <p>
      <em>single asterisks</em>
    </p>
    <p>
      <em>single underscores</em>
    </p>
    <p>
      <strong>double asterisks</strong>
    </p>
    <p>
      <strong>double underscores</strong>
    </p>
    <h3 id="code">Code</h3>
    <p>
      To indicate a span of code, wrap it with backtick quotes &#40;
      <code>`</code>&#41;. Unlike a pre-formatted code block, a code span
      indicates code within a normal paragraph. For example:
    </p>
    <p>
      Use the <code>printf&#40;&#41;</code> function.
    </p>
  </Fragment>
);
export default Markdown;
