---
hide:
  - toc
title: hotio/slskd
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
<tr><td><div id="tag25294" onclick="CopyToClipboard('tag25294');return false;" class="tag-decoration">nightly</div><div id="tag16825" onclick="CopyToClipboard('tag16825');return false;" class="tag-decoration">nightly-91190b9</div><div id="tag25065" onclick="CopyToClipboard('tag25065');return false;" class="tag-decoration">nightly-0.26.1.65534-6be4f40d</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/91190b94d740982ede0abba1d0ada246729ff9bb" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/39900639794" target="_blank">2026-10-23 04:29:58</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21474" onclick="CopyToClipboard('tag21474');return false;" class="tag-decoration">release</div><div id="tag4049" onclick="CopyToClipboard('tag4049');return false;" class="tag-decoration">release-d7bea38</div><div id="tag13537" onclick="CopyToClipboard('tag13537');return false;" class="tag-decoration">release-0.26.2</div><div id="tag29093" onclick="CopyToClipboard('tag29093');return false;" class="tag-decoration">release-v0</div><div id="tag27160" onclick="CopyToClipboard('tag27160');return false;" class="tag-decoration">release-v0.26</div><div id="tag12254" onclick="CopyToClipboard('tag12254');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/d7bea38a41fb2d44055e124737058a448f4369cd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/39900631968" target="_blank">2026-10-23 04:29:53</a></td></tr>
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
