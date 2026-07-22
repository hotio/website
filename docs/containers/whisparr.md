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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2306" onclick="CopyToClipboard('tag2306');return false;" class="tag-decoration">v2</div><div id="tag4662" onclick="CopyToClipboard('tag4662');return false;" class="tag-decoration">v2-b5a3836</div><div id="tag429" onclick="CopyToClipboard('tag429');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag29644" onclick="CopyToClipboard('tag29644');return false;" class="tag-decoration">v2-v2</div><div id="tag29933" onclick="CopyToClipboard('tag29933');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8741" onclick="CopyToClipboard('tag8741');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/b5a3836c59570640cc17371cd28169ea305948a7" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681497871" target="_blank">2026-07-19 09:23:37</a></td></tr>
<tr><td><div id="tag2886" onclick="CopyToClipboard('tag2886');return false;" class="tag-decoration">v2-develop</div><div id="tag6587" onclick="CopyToClipboard('tag6587');return false;" class="tag-decoration">v2-develop-a4ad935</div><div id="tag16135" onclick="CopyToClipboard('tag16135');return false;" class="tag-decoration">v2-develop-2.2.0-develop.141</div><div id="tag27786" onclick="CopyToClipboard('tag27786');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag5144" onclick="CopyToClipboard('tag5144');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag20436" onclick="CopyToClipboard('tag20436');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/a4ad93559ed1c47634e2271a61a1adb57bd3ecdc" target="_blank">fix s6 changes</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29681491856" target="_blank">2026-07-19 09:23:26</a></td></tr>
<tr><td><div id="tag16576" onclick="CopyToClipboard('tag16576');return false;" class="tag-decoration">v3</div><div id="tag29939" onclick="CopyToClipboard('tag29939');return false;" class="tag-decoration">v3-8e8d413</div><div id="tag23184" onclick="CopyToClipboard('tag23184');return false;" class="tag-decoration">v3-3.3.5-release.861</div><div id="tag20160" onclick="CopyToClipboard('tag20160');return false;" class="tag-decoration">v3-v3</div><div id="tag15234" onclick="CopyToClipboard('tag15234');return false;" class="tag-decoration">v3-v3.3</div><div id="tag10682" onclick="CopyToClipboard('tag10682');return false;" class="tag-decoration">v3-v3.3.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/8e8d41311f875473ab2d370d0190da5829f10466" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29878160771" target="_blank">2026-07-21 23:46:10</a></td></tr>
<tr><td><div id="tag21175" onclick="CopyToClipboard('tag21175');return false;" class="tag-decoration">v3-develop</div><div id="tag1481" onclick="CopyToClipboard('tag1481');return false;" class="tag-decoration">v3-develop-f562ae4</div><div id="tag19634" onclick="CopyToClipboard('tag19634');return false;" class="tag-decoration">v3-develop-3.3.6-develop.909</div><div id="tag20599" onclick="CopyToClipboard('tag20599');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag9208" onclick="CopyToClipboard('tag9208');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag16990" onclick="CopyToClipboard('tag16990');return false;" class="tag-decoration">v3-develop-v3.3.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/f562ae437e8b18608f7e8f25121bb01cceda4ac7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/29930794959" target="_blank">2026-07-22 14:53:46</a></td></tr>
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
