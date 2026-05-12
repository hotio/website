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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag15107" onclick="CopyToClipboard('tag15107');return false;" class="tag-decoration">v2</div><div id="tag1685" onclick="CopyToClipboard('tag1685');return false;" class="tag-decoration">v2-f568107</div><div id="tag11304" onclick="CopyToClipboard('tag11304');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag2251" onclick="CopyToClipboard('tag2251');return false;" class="tag-decoration">v2-v2</div><div id="tag17366" onclick="CopyToClipboard('tag17366');return false;" class="tag-decoration">v2-v2.2</div><div id="tag24741" onclick="CopyToClipboard('tag24741');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/f5681079493172e77f97b091fe3638da1641a183" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715061311" target="_blank">2026-05-12 05:19:58</a></td></tr>
<tr><td><div id="tag23514" onclick="CopyToClipboard('tag23514');return false;" class="tag-decoration">v2-develop</div><div id="tag16635" onclick="CopyToClipboard('tag16635');return false;" class="tag-decoration">v2-develop-96c3c5b</div><div id="tag12694" onclick="CopyToClipboard('tag12694');return false;" class="tag-decoration">v2-develop-2.2.0-develop.115</div><div id="tag14709" onclick="CopyToClipboard('tag14709');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23860" onclick="CopyToClipboard('tag23860');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag22961" onclick="CopyToClipboard('tag22961');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/96c3c5b88907831087ce3d3c478d1584b625b720" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715059618" target="_blank">2026-05-12 05:19:55</a></td></tr>
<tr><td><div id="tag21741" onclick="CopyToClipboard('tag21741');return false;" class="tag-decoration">v3</div><div id="tag30801" onclick="CopyToClipboard('tag30801');return false;" class="tag-decoration">v3-5ea215c</div><div id="tag24063" onclick="CopyToClipboard('tag24063');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag24455" onclick="CopyToClipboard('tag24455');return false;" class="tag-decoration">v3-v3</div><div id="tag14586" onclick="CopyToClipboard('tag14586');return false;" class="tag-decoration">v3-v3.3</div><div id="tag7533" onclick="CopyToClipboard('tag7533');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/5ea215c2a03d2332fa3a6a08b1fe5d46c3d10389" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25715068861" target="_blank">2026-05-12 05:20:07</a></td></tr>
<tr><td><div id="tag13218" onclick="CopyToClipboard('tag13218');return false;" class="tag-decoration">v3-develop</div><div id="tag27042" onclick="CopyToClipboard('tag27042');return false;" class="tag-decoration">v3-develop-5c1a10c</div><div id="tag4411" onclick="CopyToClipboard('tag4411');return false;" class="tag-decoration">v3-develop-3.3.3-develop.736</div><div id="tag8661" onclick="CopyToClipboard('tag8661');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag5430" onclick="CopyToClipboard('tag5430');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag17691" onclick="CopyToClipboard('tag17691');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/5c1a10c95c9efa5658b027e01bb7bd5ae60df374" target="_blank">test build</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25718085189" target="_blank">2026-05-12 06:41:56</a></td></tr>
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
