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
<tr><td><div id="tag32132" onclick="CopyToClipboard('tag32132');return false;" class="tag-decoration">nightly</div><div id="tag14620" onclick="CopyToClipboard('tag14620');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag30362" onclick="CopyToClipboard('tag30362');return false;" class="tag-decoration">nightly-2e6bf7c</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2e6bf7c94c658e99437bfd10d8cc7079872f3f7e" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20895148619" target="_blank">2026-01-11 12:29:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4582" onclick="CopyToClipboard('tag4582');return false;" class="tag-decoration">release</div><div id="tag24748" onclick="CopyToClipboard('tag24748');return false;" class="tag-decoration">release-0.14.5</div><div id="tag13369" onclick="CopyToClipboard('tag13369');return false;" class="tag-decoration">release-9fd0268</div><div id="tag857" onclick="CopyToClipboard('tag857');return false;" class="tag-decoration">release-v0</div><div id="tag23180" onclick="CopyToClipboard('tag23180');return false;" class="tag-decoration">release-v0.14</div><div id="tag32571" onclick="CopyToClipboard('tag32571');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/9fd026869a017a35895fe3b4c8fd149b3b463e3e" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20892092365" target="_blank">2026-01-11 08:20:09</a></td></tr>
<tr><td><div id="tag12578" onclick="CopyToClipboard('tag12578');return false;" class="tag-decoration">testing</div><div id="tag29833" onclick="CopyToClipboard('tag29833');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag7285" onclick="CopyToClipboard('tag7285');return false;" class="tag-decoration">testing-0b9a28d</div><div id="tag24418" onclick="CopyToClipboard('tag24418');return false;" class="tag-decoration">testing-v0</div><div id="tag2611" onclick="CopyToClipboard('tag2611');return false;" class="tag-decoration">testing-v0.14</div><div id="tag29934" onclick="CopyToClipboard('tag29934');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/0b9a28da88d729c2976668ad37c07ae2af5714bd" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20892092543" target="_blank">2026-01-11 08:20:10</a></td></tr>
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
