---
hide:
  - toc
title: hotio/slskd
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/slskd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/slskd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project (GNU AGPL-3.0 license)](https://github.com/slskd/slskd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag31951" onclick="CopyToClipboard('tag31951');return false;" class="tag-decoration">nightly</div><div id="tag1891" onclick="CopyToClipboard('tag1891');return false;" class="tag-decoration">nightly-3dd80a3</div><div id="tag9692" onclick="CopyToClipboard('tag9692');return false;" class="tag-decoration">nightly-0.24.4.65534-9c1c0203</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/3dd80a36e5186913fe38a99ffd1affbd68a334f5" target="_blank">Version update: 0.24.4.65534+86dc6072 => 0.24.4.65534+9c1c0203</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/22536347331" target="_blank">2026-03-01 04:58:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30590" onclick="CopyToClipboard('tag30590');return false;" class="tag-decoration">release</div><div id="tag22554" onclick="CopyToClipboard('tag22554');return false;" class="tag-decoration">release-795c8d2</div><div id="tag14117" onclick="CopyToClipboard('tag14117');return false;" class="tag-decoration">release-0.24.5</div><div id="tag32330" onclick="CopyToClipboard('tag32330');return false;" class="tag-decoration">release-v0</div><div id="tag17525" onclick="CopyToClipboard('tag17525');return false;" class="tag-decoration">release-v0.24</div><div id="tag13210" onclick="CopyToClipboard('tag13210');return false;" class="tag-decoration">release-v0.24.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/795c8d2d279c063a7338a8628df415faaf15bb87" target="_blank">Version update: 0.24.4 => 0.24.5</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/22536347528" target="_blank">2026-03-01 04:58:07</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="slskd" \
        -p 5030:5030 \
        -p 5031:5031 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5030/tcp,5031/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/slskd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      slskd:
        container_name: slskd
        image: ghcr.io/hotio/slskd
        ports:
          - "5030:5030"
          - "5031:5031"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5030/tcp,5031/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
