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
<tr><td><div id="tag9819" onclick="CopyToClipboard('tag9819');return false;" class="tag-decoration">nightly</div><div id="tag28087" onclick="CopyToClipboard('tag28087');return false;" class="tag-decoration">nightly-1b830500d18707e639f56d6d0d17cf059f74feca</div><div id="tag14474" onclick="CopyToClipboard('tag14474');return false;" class="tag-decoration">nightly-8448e91</div></td><td>Every commit to master</td><td><a href="https://github.com/hotio/unpackerr/commit/8448e91c4197443ae8fddb5319c36a039da9e995" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20850354696" target="_blank">2026-01-09 11:23:40</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag69" onclick="CopyToClipboard('tag69');return false;" class="tag-decoration">release</div><div id="tag8763" onclick="CopyToClipboard('tag8763');return false;" class="tag-decoration">release-0.14.5</div><div id="tag18031" onclick="CopyToClipboard('tag18031');return false;" class="tag-decoration">release-8429396</div><div id="tag5309" onclick="CopyToClipboard('tag5309');return false;" class="tag-decoration">release-v0</div><div id="tag21097" onclick="CopyToClipboard('tag21097');return false;" class="tag-decoration">release-v0.14</div><div id="tag11791" onclick="CopyToClipboard('tag11791');return false;" class="tag-decoration">release-v0.14.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/unpackerr/commit/84293967c75f6f495fd0d2737a2252694b52d7cd" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20845772579" target="_blank">2026-01-09 08:22:50</a></td></tr>
<tr><td><div id="tag6124" onclick="CopyToClipboard('tag6124');return false;" class="tag-decoration">testing</div><div id="tag2886" onclick="CopyToClipboard('tag2886');return false;" class="tag-decoration">testing-0.14.5</div><div id="tag10626" onclick="CopyToClipboard('tag10626');return false;" class="tag-decoration">testing-6ced8e0</div><div id="tag30477" onclick="CopyToClipboard('tag30477');return false;" class="tag-decoration">testing-v0</div><div id="tag30740" onclick="CopyToClipboard('tag30740');return false;" class="tag-decoration">testing-v0.14</div><div id="tag7221" onclick="CopyToClipboard('tag7221');return false;" class="tag-decoration">testing-v0.14.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/unpackerr/commit/6ced8e0523c16581e4db7f7e83f8010d2aebdb39" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/unpackerr/actions/runs/20845772975" target="_blank">2026-01-09 08:22:51</a></td></tr>
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
