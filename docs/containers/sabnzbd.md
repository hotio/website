---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div id="tag11566" onclick="CopyToClipboard('tag11566');return false;" class="tag-decoration">nightly</div><div id="tag10312" onclick="CopyToClipboard('tag10312');return false;" class="tag-decoration">nightly-27ab203</div><div id="tag26058" onclick="CopyToClipboard('tag26058');return false;" class="tag-decoration">nightly-791650960b30394f36671b5b2477fb02f2b7ed4d</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/27ab20309fade81d56418c47c699b362fcd2d74b" target="_blank">Version update: e8fef31a3e34d75e9d10babd116a8541f853375c => 791650960b30394f36671b5b2477fb02f2b7ed4d</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25320926572" target="_blank">2026-05-04 13:10:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30248" onclick="CopyToClipboard('tag30248');return false;" class="tag-decoration">release</div><div id="tag32200" onclick="CopyToClipboard('tag32200');return false;" class="tag-decoration">release-83955ca</div><div id="tag21791" onclick="CopyToClipboard('tag21791');return false;" class="tag-decoration">release-5.0.1</div><div id="tag14" onclick="CopyToClipboard('tag14');return false;" class="tag-decoration">release-v5</div><div id="tag6513" onclick="CopyToClipboard('tag6513');return false;" class="tag-decoration">release-v5.0</div><div id="tag12212" onclick="CopyToClipboard('tag12212');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/83955ca245d4949e4c58d3e96c9199ee430f62b8" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234298284" target="_blank">2026-05-01 21:38:26</a></td></tr>
<tr><td><div id="tag19722" onclick="CopyToClipboard('tag19722');return false;" class="tag-decoration">testing</div><div id="tag17937" onclick="CopyToClipboard('tag17937');return false;" class="tag-decoration">testing-820aa86</div><div id="tag11872" onclick="CopyToClipboard('tag11872');return false;" class="tag-decoration">testing-5.0.1</div><div id="tag31469" onclick="CopyToClipboard('tag31469');return false;" class="tag-decoration">testing-v5</div><div id="tag3037" onclick="CopyToClipboard('tag3037');return false;" class="tag-decoration">testing-v5.0</div><div id="tag18108" onclick="CopyToClipboard('tag18108');return false;" class="tag-decoration">testing-v5.0.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/820aa86f551da121c7caec9fac9120e6efe60d4a" target="_blank">Version update: 5.0.0 => 5.0.1</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25234299007" target="_blank">2026-05-01 21:38:28</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
