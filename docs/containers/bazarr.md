---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag25679" onclick="CopyToClipboard('tag25679');return false;" class="tag-decoration">nightly</div><div id="tag21390" onclick="CopyToClipboard('tag21390');return false;" class="tag-decoration">nightly-756caae</div><div id="tag14703" onclick="CopyToClipboard('tag14703');return false;" class="tag-decoration">nightly-1.6.1-beta.33</div><div id="tag3039" onclick="CopyToClipboard('tag3039');return false;" class="tag-decoration">nightly-v1</div><div id="tag14497" onclick="CopyToClipboard('tag14497');return false;" class="tag-decoration">nightly-v1.6</div><div id="tag9895" onclick="CopyToClipboard('tag9895');return false;" class="tag-decoration">nightly-v1.6.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/756caae0d942ea0473c40e91b54bcd31e91f6aec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/33253938048" target="_blank">2026-08-29 13:01:03</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16105" onclick="CopyToClipboard('tag16105');return false;" class="tag-decoration">release</div><div id="tag16195" onclick="CopyToClipboard('tag16195');return false;" class="tag-decoration">release-95439e8</div><div id="tag2904" onclick="CopyToClipboard('tag2904');return false;" class="tag-decoration">release-1.6.0</div><div id="tag25203" onclick="CopyToClipboard('tag25203');return false;" class="tag-decoration">release-v1</div><div id="tag1014" onclick="CopyToClipboard('tag1014');return false;" class="tag-decoration">release-v1.6</div><div id="tag20084" onclick="CopyToClipboard('tag20084');return false;" class="tag-decoration">release-v1.6.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/95439e8bdd27a4f893207dfb22b29c9dd10219a7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/32918880327" target="_blank">2026-08-26 01:24:52</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
