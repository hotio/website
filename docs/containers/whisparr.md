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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3511" onclick="CopyToClipboard('tag3511');return false;" class="tag-decoration">v2</div><div id="tag28714" onclick="CopyToClipboard('tag28714');return false;" class="tag-decoration">v2-465d7ca</div><div id="tag32338" onclick="CopyToClipboard('tag32338');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6993" onclick="CopyToClipboard('tag6993');return false;" class="tag-decoration">v2-v2</div><div id="tag19570" onclick="CopyToClipboard('tag19570');return false;" class="tag-decoration">v2-v2.2</div><div id="tag22884" onclick="CopyToClipboard('tag22884');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465d7cabe8312293c110e39bf67f184bc9a998ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271181907" target="_blank">2026-06-10 10:51:47</a></td></tr>
<tr><td><div id="tag3412" onclick="CopyToClipboard('tag3412');return false;" class="tag-decoration">v2-develop</div><div id="tag4639" onclick="CopyToClipboard('tag4639');return false;" class="tag-decoration">v2-develop-52c9248</div><div id="tag2484" onclick="CopyToClipboard('tag2484');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag31077" onclick="CopyToClipboard('tag31077');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26978" onclick="CopyToClipboard('tag26978');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag30310" onclick="CopyToClipboard('tag30310');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/52c92484c9e9de5a850502152f399bf02808a944" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271180018" target="_blank">2026-06-10 10:51:45</a></td></tr>
<tr><td><div id="tag1610" onclick="CopyToClipboard('tag1610');return false;" class="tag-decoration">v3</div><div id="tag11194" onclick="CopyToClipboard('tag11194');return false;" class="tag-decoration">v3-25f3a87</div><div id="tag15111" onclick="CopyToClipboard('tag15111');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag8931" onclick="CopyToClipboard('tag8931');return false;" class="tag-decoration">v3-v3</div><div id="tag11040" onclick="CopyToClipboard('tag11040');return false;" class="tag-decoration">v3-v3.3</div><div id="tag805" onclick="CopyToClipboard('tag805');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/25f3a873199cb8559760a6fd48eb664ea54dc09b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271178476" target="_blank">2026-06-10 10:51:44</a></td></tr>
<tr><td><div id="tag7087" onclick="CopyToClipboard('tag7087');return false;" class="tag-decoration">v3-develop</div><div id="tag22811" onclick="CopyToClipboard('tag22811');return false;" class="tag-decoration">v3-develop-20d37c7</div><div id="tag18622" onclick="CopyToClipboard('tag18622');return false;" class="tag-decoration">v3-develop-3.3.3-develop.760</div><div id="tag27653" onclick="CopyToClipboard('tag27653');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag2638" onclick="CopyToClipboard('tag2638');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag19838" onclick="CopyToClipboard('tag19838');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/20d37c7956501ff4c57d803f62577fc54704104c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271177226" target="_blank">2026-06-10 10:51:42</a></td></tr>
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
