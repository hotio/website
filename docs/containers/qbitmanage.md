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
<tr><td><div id="tag23420" onclick="CopyToClipboard('tag23420');return false;" class="tag-decoration">nightly</div><div id="tag16981" onclick="CopyToClipboard('tag16981');return false;" class="tag-decoration">nightly-b9647f3</div><div id="tag12568" onclick="CopyToClipboard('tag12568');return false;" class="tag-decoration">nightly-535777620dc5cedbd92a52d41bee7c432a6389b5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/b9647f3da926ce6742ef9db111cf1448635047a6" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21090394941" target="_blank">2026-01-17 07:01:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14938" onclick="CopyToClipboard('tag14938');return false;" class="tag-decoration">release</div><div id="tag23072" onclick="CopyToClipboard('tag23072');return false;" class="tag-decoration">release-7e510ca</div><div id="tag18640" onclick="CopyToClipboard('tag18640');return false;" class="tag-decoration">release-4.6.5</div><div id="tag14372" onclick="CopyToClipboard('tag14372');return false;" class="tag-decoration">release-v4</div><div id="tag7197" onclick="CopyToClipboard('tag7197');return false;" class="tag-decoration">release-v4.6</div><div id="tag32641" onclick="CopyToClipboard('tag32641');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/7e510cafcefcf5ba860508682e6a8c475f655772" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21090395355" target="_blank">2026-01-17 07:01:34</a></td></tr>
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
