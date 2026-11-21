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
<tr><td><div id="tag11520" onclick="CopyToClipboard('tag11520');return false;" class="tag-decoration">nightly</div><div id="tag32659" onclick="CopyToClipboard('tag32659');return false;" class="tag-decoration">nightly-2f8030b</div><div id="tag23623" onclick="CopyToClipboard('tag23623');return false;" class="tag-decoration">nightly-0.26.2.65534-02f7849e</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/2f8030b1654c50d68cc6191fac202da379bd4a85" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/44959617161" target="_blank">2026-11-21 23:00:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25107" onclick="CopyToClipboard('tag25107');return false;" class="tag-decoration">release</div><div id="tag11250" onclick="CopyToClipboard('tag11250');return false;" class="tag-decoration">release-7d6659e</div><div id="tag22401" onclick="CopyToClipboard('tag22401');return false;" class="tag-decoration">release-0.26.2</div><div id="tag18146" onclick="CopyToClipboard('tag18146');return false;" class="tag-decoration">release-v0</div><div id="tag29960" onclick="CopyToClipboard('tag29960');return false;" class="tag-decoration">release-v0.26</div><div id="tag27885" onclick="CopyToClipboard('tag27885');return false;" class="tag-decoration">release-v0.26.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/7d6659efe36489ed86c977a5d5427e02662eb4d7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/42308580170" target="_blank">2026-11-06 22:58:09</a></td></tr>
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
