---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12376" onclick="CopyToClipboard('tag12376');return false;" class="tag-decoration">release</div><div id="tag24784" onclick="CopyToClipboard('tag24784');return false;" class="tag-decoration">release-90b9b0f</div><div id="tag5353" onclick="CopyToClipboard('tag5353');return false;" class="tag-decoration">release-0.24.1827</div><div id="tag5369" onclick="CopyToClipboard('tag5369');return false;" class="tag-decoration">release-v0</div><div id="tag31648" onclick="CopyToClipboard('tag31648');return false;" class="tag-decoration">release-v0.24</div><div id="tag2788" onclick="CopyToClipboard('tag2788');return false;" class="tag-decoration">release-v0.24.1827</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/90b9b0f58326fe7cc6953c5746bfb1a1301c408c" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25605046946" target="_blank">2026-05-09 15:43:21</a></td></tr>
<tr><td><div id="tag5195" onclick="CopyToClipboard('tag5195');return false;" class="tag-decoration">testing</div><div id="tag26314" onclick="CopyToClipboard('tag26314');return false;" class="tag-decoration">testing-8c90772</div><div id="tag28207" onclick="CopyToClipboard('tag28207');return false;" class="tag-decoration">testing-0.24.1827</div><div id="tag10526" onclick="CopyToClipboard('tag10526');return false;" class="tag-decoration">testing-v0</div><div id="tag30105" onclick="CopyToClipboard('tag30105');return false;" class="tag-decoration">testing-v0.24</div><div id="tag14902" onclick="CopyToClipboard('tag14902');return false;" class="tag-decoration">testing-v0.24.1827</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/8c907724b0b1e6f864ee15e40b80b15a54a46dfb" target="_blank">Upstream update: alpinevpn-b1ea9d4 => alpinevpn-0fe4477</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25605047313" target="_blank">2026-05-09 15:43:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
