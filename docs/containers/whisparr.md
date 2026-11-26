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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13566" onclick="CopyToClipboard('tag13566');return false;" class="tag-decoration">v2</div><div id="tag1948" onclick="CopyToClipboard('tag1948');return false;" class="tag-decoration">v2-2e0e2ad</div><div id="tag5711" onclick="CopyToClipboard('tag5711');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag19748" onclick="CopyToClipboard('tag19748');return false;" class="tag-decoration">v2-v2</div><div id="tag996" onclick="CopyToClipboard('tag996');return false;" class="tag-decoration">v2-v2.3</div><div id="tag28545" onclick="CopyToClipboard('tag28545');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/2e0e2ad7a96720e015196e6be04a963e8dfc1360" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763767871" target="_blank">2026-11-26 05:46:23</a></td></tr>
<tr><td><div id="tag6817" onclick="CopyToClipboard('tag6817');return false;" class="tag-decoration">v2-develop</div><div id="tag20724" onclick="CopyToClipboard('tag20724');return false;" class="tag-decoration">v2-develop-434ab16</div><div id="tag29531" onclick="CopyToClipboard('tag29531');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag23496" onclick="CopyToClipboard('tag23496');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag10144" onclick="CopyToClipboard('tag10144');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag1916" onclick="CopyToClipboard('tag1916');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/434ab16345c50ceca31ae3ecc9972465d07c0772" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763759432" target="_blank">2026-11-26 05:46:18</a></td></tr>
<tr><td><div id="tag31181" onclick="CopyToClipboard('tag31181');return false;" class="tag-decoration">v3</div><div id="tag11382" onclick="CopyToClipboard('tag11382');return false;" class="tag-decoration">v3-f3b7012</div><div id="tag24575" onclick="CopyToClipboard('tag24575');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag31225" onclick="CopyToClipboard('tag31225');return false;" class="tag-decoration">v3-v3</div><div id="tag30512" onclick="CopyToClipboard('tag30512');return false;" class="tag-decoration">v3-v3.6</div><div id="tag26389" onclick="CopyToClipboard('tag26389');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/f3b70121cf0940ddafcc2fadfa9548f850174462" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763754489" target="_blank">2026-11-26 05:46:15</a></td></tr>
<tr><td><div id="tag24832" onclick="CopyToClipboard('tag24832');return false;" class="tag-decoration">v3-develop</div><div id="tag16967" onclick="CopyToClipboard('tag16967');return false;" class="tag-decoration">v3-develop-aeb2eea</div><div id="tag28335" onclick="CopyToClipboard('tag28335');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag3439" onclick="CopyToClipboard('tag3439');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag20552" onclick="CopyToClipboard('tag20552');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag1111" onclick="CopyToClipboard('tag1111');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/aeb2eea648a28e6d19b0c3863f6dbc9273afe43d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45763770956" target="_blank">2026-11-26 05:46:24</a></td></tr>
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
