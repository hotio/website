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
<tr><td><div id="tag31362" onclick="CopyToClipboard('tag31362');return false;" class="tag-decoration">nightly</div><div id="tag22053" onclick="CopyToClipboard('tag22053');return false;" class="tag-decoration">nightly-5367905</div><div id="tag31469" onclick="CopyToClipboard('tag31469');return false;" class="tag-decoration">nightly-efa21da14e057470645c1ce3365023c9b46ad91a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/53679059d3a3f86e7c43bea0ef764c751673af45" target="_blank">Version update: 4fc17037bf0ea18431b7c45cec4298d0d1ec5e64 => efa21da14e057470645c1ce3365023c9b46ad91a</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24670456333" target="_blank">2026-04-20 13:53:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22236" onclick="CopyToClipboard('tag22236');return false;" class="tag-decoration">release</div><div id="tag19570" onclick="CopyToClipboard('tag19570');return false;" class="tag-decoration">release-949df25</div><div id="tag2591" onclick="CopyToClipboard('tag2591');return false;" class="tag-decoration">release-4.7.0</div><div id="tag22473" onclick="CopyToClipboard('tag22473');return false;" class="tag-decoration">release-v4</div><div id="tag2250" onclick="CopyToClipboard('tag2250');return false;" class="tag-decoration">release-v4.7</div><div id="tag4795" onclick="CopyToClipboard('tag4795');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/949df2592cb8b2a0e0357cb9c36301d05ce8721b" target="_blank">Upstream update: alpinevpn-9abb66b => alpinevpn-b1ea9d4</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24552135143" target="_blank">2026-04-17 06:54:13</a></td></tr>
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
