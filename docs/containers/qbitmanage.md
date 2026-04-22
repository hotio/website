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
<tr><td><div id="tag12242" onclick="CopyToClipboard('tag12242');return false;" class="tag-decoration">nightly</div><div id="tag26189" onclick="CopyToClipboard('tag26189');return false;" class="tag-decoration">nightly-2754cf2</div><div id="tag18495" onclick="CopyToClipboard('tag18495');return false;" class="tag-decoration">nightly-010545c0b4923f4434302b2b20e8ede163004209</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/2754cf2a1df47aad9f231eb7c679d2c7526ec5d9" target="_blank">Version update: 11921dfd83d14ecbdccb0339a905baae2c46311e => 010545c0b4923f4434302b2b20e8ede163004209</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24776400115" target="_blank">2026-04-22 11:43:47</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21892" onclick="CopyToClipboard('tag21892');return false;" class="tag-decoration">release</div><div id="tag28483" onclick="CopyToClipboard('tag28483');return false;" class="tag-decoration">release-949df25</div><div id="tag24866" onclick="CopyToClipboard('tag24866');return false;" class="tag-decoration">release-4.7.0</div><div id="tag18432" onclick="CopyToClipboard('tag18432');return false;" class="tag-decoration">release-v4</div><div id="tag12124" onclick="CopyToClipboard('tag12124');return false;" class="tag-decoration">release-v4.7</div><div id="tag7947" onclick="CopyToClipboard('tag7947');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/949df2592cb8b2a0e0357cb9c36301d05ce8721b" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24552135143" target="_blank">2026-04-17 06:54:13</a></td></tr>
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
