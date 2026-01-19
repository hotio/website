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
<tr><td><div id="tag918" onclick="CopyToClipboard('tag918');return false;" class="tag-decoration">nightly</div><div id="tag28551" onclick="CopyToClipboard('tag28551');return false;" class="tag-decoration">nightly-7c1bf2d</div><div id="tag24237" onclick="CopyToClipboard('tag24237');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/7c1bf2d48827ca75c913e81ad6797bdfee626395" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21124057162" target="_blank">2026-01-19 03:14:22</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2866" onclick="CopyToClipboard('tag2866');return false;" class="tag-decoration">release</div><div id="tag6733" onclick="CopyToClipboard('tag6733');return false;" class="tag-decoration">release-ca4d3b2</div><div id="tag16045" onclick="CopyToClipboard('tag16045');return false;" class="tag-decoration">release-0.14.5</div><div id="tag1498" onclick="CopyToClipboard('tag1498');return false;" class="tag-decoration">release-v0</div><div id="tag15679" onclick="CopyToClipboard('tag15679');return false;" class="tag-decoration">release-v0.14</div><div id="tag22310" onclick="CopyToClipboard('tag22310');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ca4d3b2e38101ca9687db497bacfeca2a014982a" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21124057483" target="_blank">2026-01-19 03:14:23</a></td></tr>
<tr><td><div id="tag3114" onclick="CopyToClipboard('tag3114');return false;" class="tag-decoration">testing</div><div id="tag1640" onclick="CopyToClipboard('tag1640');return false;" class="tag-decoration">testing-e46ba38</div><div id="tag28419" onclick="CopyToClipboard('tag28419');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag8186" onclick="CopyToClipboard('tag8186');return false;" class="tag-decoration">testing-v0</div><div id="tag27506" onclick="CopyToClipboard('tag27506');return false;" class="tag-decoration">testing-v0.14</div><div id="tag6181" onclick="CopyToClipboard('tag6181');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/e46ba385a42b203569df5622c06598977c4dcb3a" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/21124058062" target="_blank">2026-01-19 03:14:25</a></td></tr>
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
