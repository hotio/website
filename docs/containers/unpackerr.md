---
hide:
  - toc
title: hotio/unpackerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/unpackerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/davidnewhall/unpackerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag6700" onclick="CopyToClipboard('tag6700');return false;" class="tag-decoration">nightly</div><div id="tag27056" onclick="CopyToClipboard('tag27056');return false;" class="tag-decoration">nightly-07c71b6</div><div id="tag6875" onclick="CopyToClipboard('tag6875');return false;" class="tag-decoration">nightly-63dfd08d2d0bda3d59d92eb9778e2ccf59207bdd</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/07c71b6c33975747bb4066d8fb783fe70b99ba71" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/30373376881" target="_blank">2026-07-28 15:26:24</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29260" onclick="CopyToClipboard('tag29260');return false;" class="tag-decoration">release</div><div id="tag31497" onclick="CopyToClipboard('tag31497');return false;" class="tag-decoration">release-567ddeb</div><div id="tag12837" onclick="CopyToClipboard('tag12837');return false;" class="tag-decoration">release-0.15.2</div><div id="tag1098" onclick="CopyToClipboard('tag1098');return false;" class="tag-decoration">release-v0</div><div id="tag24260" onclick="CopyToClipboard('tag24260');return false;" class="tag-decoration">release-v0.15</div><div id="tag2547" onclick="CopyToClipboard('tag2547');return false;" class="tag-decoration">release-v0.15.2</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/567ddeb8b5979b16b678f8d93180365d92ac9c66" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/30373381207" target="_blank">2026-07-28 15:26:26</a></td></tr>
<tr><td><div id="tag29544" onclick="CopyToClipboard('tag29544');return false;" class="tag-decoration">testing</div><div id="tag31606" onclick="CopyToClipboard('tag31606');return false;" class="tag-decoration">testing-49c7e75</div><div id="tag31246" onclick="CopyToClipboard('tag31246');return false;" class="tag-decoration">testing-0.15.2</div><div id="tag14286" onclick="CopyToClipboard('tag14286');return false;" class="tag-decoration">testing-v0</div><div id="tag10357" onclick="CopyToClipboard('tag10357');return false;" class="tag-decoration">testing-v0.15</div><div id="tag25432" onclick="CopyToClipboard('tag25432');return false;" class="tag-decoration">testing-v0.15.2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/49c7e75d91e359083f4d50b9760d8ccac3f98fe2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/31874898120" target="_blank">2026-08-15 08:36:27</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="unpackerr" \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/unpackerr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      unpackerr:
        container_name: unpackerr
        image: ghcr.io/hotio/unpackerr
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

## Configuration

You can use docker environment variables or a configuration file that should be stored in `/config/unpackerr.conf`. Take a look at the [upstream](https://github.com/davidnewhall/unpackerr){ target="_blank" rel="noopener" } project page for info on how to configure Unpackerr.

--8<-- "includes/wireguard.md"
