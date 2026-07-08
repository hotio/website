---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28531" onclick="CopyToClipboard('tag28531');return false;" class="tag-decoration">v2</div><div id="tag21909" onclick="CopyToClipboard('tag21909');return false;" class="tag-decoration">v2-d4510d1</div><div id="tag11351" onclick="CopyToClipboard('tag11351');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2088" onclick="CopyToClipboard('tag2088');return false;" class="tag-decoration">v2-v2</div><div id="tag3915" onclick="CopyToClipboard('tag3915');return false;" class="tag-decoration">v2-v2.2</div><div id="tag15586" onclick="CopyToClipboard('tag15586');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/d4510d1075956091a4e71a143511ed65e614bf7c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591500977" target="_blank">2026-07-02 12:52:53</a></td></tr>
<tr><td><div id="tag32647" onclick="CopyToClipboard('tag32647');return false;" class="tag-decoration">v2-develop</div><div id="tag13518" onclick="CopyToClipboard('tag13518');return false;" class="tag-decoration">v2-develop-85131af</div><div id="tag7811" onclick="CopyToClipboard('tag7811');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag22947" onclick="CopyToClipboard('tag22947');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11522" onclick="CopyToClipboard('tag11522');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag16955" onclick="CopyToClipboard('tag16955');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/85131afc0061ff9d183b359cd0e9403ac24e23a0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591530188" target="_blank">2026-07-02 12:53:23</a></td></tr>
<tr><td><div id="tag1619" onclick="CopyToClipboard('tag1619');return false;" class="tag-decoration">v3</div><div id="tag1882" onclick="CopyToClipboard('tag1882');return false;" class="tag-decoration">v3-c514abc</div><div id="tag16414" onclick="CopyToClipboard('tag16414');return false;" class="tag-decoration">v3-3.3.4-release.794</div><div id="tag14283" onclick="CopyToClipboard('tag14283');return false;" class="tag-decoration">v3-v3</div><div id="tag30773" onclick="CopyToClipboard('tag30773');return false;" class="tag-decoration">v3-v3.3</div><div id="tag19261" onclick="CopyToClipboard('tag19261');return false;" class="tag-decoration">v3-v3.3.4</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/c514abcc95b2d169b93f9aa8c6e4846252f8008c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28591501776" target="_blank">2026-07-02 12:52:54</a></td></tr>
<tr><td><div id="tag16774" onclick="CopyToClipboard('tag16774');return false;" class="tag-decoration">v3-develop</div><div id="tag30325" onclick="CopyToClipboard('tag30325');return false;" class="tag-decoration">v3-develop-88991cb</div><div id="tag6116" onclick="CopyToClipboard('tag6116');return false;" class="tag-decoration">v3-develop-3.3.4-develop.798</div><div id="tag306" onclick="CopyToClipboard('tag306');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28795" onclick="CopyToClipboard('tag28795');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag22794" onclick="CopyToClipboard('tag22794');return false;" class="tag-decoration">v3-develop-v3.3.4</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/88991cb592d11d8bc82d6c108da13296a462fc43" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/28978568265" target="_blank">2026-07-08 21:57:02</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
