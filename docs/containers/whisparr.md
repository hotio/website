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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18599" onclick="CopyToClipboard('tag18599');return false;" class="tag-decoration">v2</div><div id="tag12572" onclick="CopyToClipboard('tag12572');return false;" class="tag-decoration">v2-bd26bf8</div><div id="tag23691" onclick="CopyToClipboard('tag23691');return false;" class="tag-decoration">v2-2.2.0-release.231</div><div id="tag9731" onclick="CopyToClipboard('tag9731');return false;" class="tag-decoration">v2-v2</div><div id="tag31412" onclick="CopyToClipboard('tag31412');return false;" class="tag-decoration">v2-v2.2</div><div id="tag6210" onclick="CopyToClipboard('tag6210');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/bd26bf80189b90f776856cc63082e2145da00049" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527208" target="_blank">2026-09-22 08:00:54</a></td></tr>
<tr><td><div id="tag21378" onclick="CopyToClipboard('tag21378');return false;" class="tag-decoration">v2-develop</div><div id="tag28665" onclick="CopyToClipboard('tag28665');return false;" class="tag-decoration">v2-develop-3e1a116</div><div id="tag28658" onclick="CopyToClipboard('tag28658');return false;" class="tag-decoration">v2-develop-2.2.0-develop.404</div><div id="tag17655" onclick="CopyToClipboard('tag17655');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5019" onclick="CopyToClipboard('tag5019');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag11655" onclick="CopyToClipboard('tag11655');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/3e1a116cef3b0a89ab1a64ddc1757f8f5a1039ce" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35471710899" target="_blank">2026-09-19 21:52:39</a></td></tr>
<tr><td><div id="tag16949" onclick="CopyToClipboard('tag16949');return false;" class="tag-decoration">v3</div><div id="tag31066" onclick="CopyToClipboard('tag31066');return false;" class="tag-decoration">v3-e36c32c</div><div id="tag22865" onclick="CopyToClipboard('tag22865');return false;" class="tag-decoration">v3-3.6.1-release.1708</div><div id="tag14508" onclick="CopyToClipboard('tag14508');return false;" class="tag-decoration">v3-v3</div><div id="tag1040" onclick="CopyToClipboard('tag1040');return false;" class="tag-decoration">v3-v3.6</div><div id="tag27817" onclick="CopyToClipboard('tag27817');return false;" class="tag-decoration">v3-v3.6.1</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/e36c32c5776e543477a023bde7c6a6f366fd35a4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702527361" target="_blank">2026-09-22 08:00:55</a></td></tr>
<tr><td><div id="tag25558" onclick="CopyToClipboard('tag25558');return false;" class="tag-decoration">v3-develop</div><div id="tag4239" onclick="CopyToClipboard('tag4239');return false;" class="tag-decoration">v3-develop-ad98dbc</div><div id="tag2051" onclick="CopyToClipboard('tag2051');return false;" class="tag-decoration">v3-develop-3.6.1-develop.1711</div><div id="tag13983" onclick="CopyToClipboard('tag13983');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag28197" onclick="CopyToClipboard('tag28197');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag29975" onclick="CopyToClipboard('tag29975');return false;" class="tag-decoration">v3-develop-v3.6.1</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/ad98dbce53211ad47fcca2af8524380359961394" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/35702530980" target="_blank">2026-09-22 08:00:56</a></td></tr>
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
