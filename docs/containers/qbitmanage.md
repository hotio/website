---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag23923" onclick="CopyToClipboard('tag23923');return false;" class="tag-decoration">nightly</div><div id="tag1813" onclick="CopyToClipboard('tag1813');return false;" class="tag-decoration">nightly-59f14ee</div><div id="tag10312" onclick="CopyToClipboard('tag10312');return false;" class="tag-decoration">nightly-446bd7dc984b7884f00938f739688d344cb1b940</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/59f14eecf7bc914872c96463cbf775f80466404c" target="_blank">Version update: ff54453fd92663e5779799d821f228d4090f8d79 => 446bd7dc984b7884f00938f739688d344cb1b940</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25714592757" target="_blank">2026-05-12 05:05:35</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8621" onclick="CopyToClipboard('tag8621');return false;" class="tag-decoration">release</div><div id="tag18306" onclick="CopyToClipboard('tag18306');return false;" class="tag-decoration">release-ec30bf1</div><div id="tag18384" onclick="CopyToClipboard('tag18384');return false;" class="tag-decoration">release-4.7.0</div><div id="tag21324" onclick="CopyToClipboard('tag21324');return false;" class="tag-decoration">release-v4</div><div id="tag19190" onclick="CopyToClipboard('tag19190');return false;" class="tag-decoration">release-v4.7</div><div id="tag11556" onclick="CopyToClipboard('tag11556');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/ec30bf1f3fd6207b1dcaace327b5fe1724f98e66" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25708419773" target="_blank">2026-05-12 01:52:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
