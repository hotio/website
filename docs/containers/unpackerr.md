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
<tr><td><div id="tag1273" onclick="CopyToClipboard('tag1273');return false;" class="tag-decoration">nightly</div><div id="tag23696" onclick="CopyToClipboard('tag23696');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag18859" onclick="CopyToClipboard('tag18859');return false;" class="tag-decoration">nightly-2e6bf7c</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/2e6bf7c94c658e99437bfd10d8cc7079872f3f7e" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20895148619" target="_blank">2026-01-11 12:29:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2879" onclick="CopyToClipboard('tag2879');return false;" class="tag-decoration">release</div><div id="tag13904" onclick="CopyToClipboard('tag13904');return false;" class="tag-decoration">release-0.14.5</div><div id="tag4211" onclick="CopyToClipboard('tag4211');return false;" class="tag-decoration">release-ac72a00</div><div id="tag14933" onclick="CopyToClipboard('tag14933');return false;" class="tag-decoration">release-v0</div><div id="tag9453" onclick="CopyToClipboard('tag9453');return false;" class="tag-decoration">release-v0.14</div><div id="tag29459" onclick="CopyToClipboard('tag29459');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ac72a001245a5a8779cc00a5fd89b87fb4318935" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20895148612" target="_blank">2026-01-11 12:29:30</a></td></tr>
<tr><td><div id="tag32600" onclick="CopyToClipboard('tag32600');return false;" class="tag-decoration">testing</div><div id="tag11223" onclick="CopyToClipboard('tag11223');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag32662" onclick="CopyToClipboard('tag32662');return false;" class="tag-decoration">testing-ea13ded</div><div id="tag9619" onclick="CopyToClipboard('tag9619');return false;" class="tag-decoration">testing-v0</div><div id="tag11565" onclick="CopyToClipboard('tag11565');return false;" class="tag-decoration">testing-v0.14</div><div id="tag11632" onclick="CopyToClipboard('tag11632');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/ea13ded8349639f9cd5ee6746262e2f27638b0e2" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20895148749" target="_blank">2026-01-11 12:29:31</a></td></tr>
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
