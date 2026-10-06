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
<tr><td><div id="tag7746" onclick="CopyToClipboard('tag7746');return false;" class="tag-decoration">nightly</div><div id="tag415" onclick="CopyToClipboard('tag415');return false;" class="tag-decoration">nightly-e6abfa6</div><div id="tag544" onclick="CopyToClipboard('tag544');return false;" class="tag-decoration">nightly-0.26.0.65534-7c302a75</div></td><td>Canary releases</td><td><a href="https://github.com/hotio/slskd/commit/e6abfa62ddba67ee04fac9d9d02740c057866aee" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/37406203121" target="_blank">2026-10-06 02:51:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7191" onclick="CopyToClipboard('tag7191');return false;" class="tag-decoration">release</div><div id="tag10876" onclick="CopyToClipboard('tag10876');return false;" class="tag-decoration">release-6b16be7</div><div id="tag20834" onclick="CopyToClipboard('tag20834');return false;" class="tag-decoration">release-0.26.0</div><div id="tag6349" onclick="CopyToClipboard('tag6349');return false;" class="tag-decoration">release-v0</div><div id="tag16572" onclick="CopyToClipboard('tag16572');return false;" class="tag-decoration">release-v0.26</div><div id="tag22906" onclick="CopyToClipboard('tag22906');return false;" class="tag-decoration">release-v0.26.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/slskd/commit/6b16be7813dd3344e14aaa9aafefea7ac39dfef5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/slskd/actions/runs/36930634419" target="_blank">2026-10-01 21:44:12</a></td></tr>
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
