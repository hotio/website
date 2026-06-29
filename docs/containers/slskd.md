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
<tr><td><div id="tag2758" onclick="CopyToClipboard('tag2758');return false;" class="tag-decoration">nightly</div><div id="tag3269" onclick="CopyToClipboard('tag3269');return false;" class="tag-decoration">nightly-bc07bee</div><div id="tag20810" onclick="CopyToClipboard('tag20810');return false;" class="tag-decoration">nightly-0.25.1.65534-3edca316</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/bc07beee872641105da1ac4b12516f6ddff5d58d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/28396149834" target="_blank">2026-06-29 19:07:57</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8255" onclick="CopyToClipboard('tag8255');return false;" class="tag-decoration">release</div><div id="tag2312" onclick="CopyToClipboard('tag2312');return false;" class="tag-decoration">release-9878bb3</div><div id="tag6816" onclick="CopyToClipboard('tag6816');return false;" class="tag-decoration">release-0.25.1</div><div id="tag847" onclick="CopyToClipboard('tag847');return false;" class="tag-decoration">release-v0</div><div id="tag4459" onclick="CopyToClipboard('tag4459');return false;" class="tag-decoration">release-v0.25</div><div id="tag9905" onclick="CopyToClipboard('tag9905');return false;" class="tag-decoration">release-v0.25.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/9878bb3f27d8f1fd68f1d10973b625132a6b3df5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/28396154556" target="_blank">2026-06-29 19:08:02</a></td></tr>
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
